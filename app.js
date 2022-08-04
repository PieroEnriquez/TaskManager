const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const port = process.env.PORT || 3000;

//Middleware

app.use(express.json());


//Routes
app.get('/', (req, res) => {
    res.send('Task Manager App')
});

app.use('/api/v1/tasks', tasks); //for the tasks API



app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`)
});