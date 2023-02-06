const express = require('express');
const  tasks= require('./routes/tasks');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Task Manger App');
})
app.use('/api/v1/tasks', tasks);

const port = 3000;
app.listen(port, console.log(`Server is listening on port http://localhost:${port}`));