const express = require('express');
const  tasks= require('./routes/tasks');
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
//middleware
app.use(express.json());
app.use(express.static('./public'));

//routes
app.get('/', (req, res) => {
    res.send('Task Manger App');
})
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

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
