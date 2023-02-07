const express = require('express');
const  tasks= require('./routes/tasks');
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config();
//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('Task Manger App');
})
app.use('/api/v1/tasks', tasks);

const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port http://localhost:${port}`));

    } catch (error) {
        console.log("connect failure!!");
    }
}
start();
