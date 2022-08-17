const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('Task Manager App')
});

app.use('/api/v1/tasks', tasks); //for the tasks API

app.use(notFound);

app.use(errorHandlerMiddleware);


const start = async () => {
    try {
        await connectDB(process.env.DB_CONNECTION)
        app.listen(port,() => {
            console.log(`Server running at http://localhost:${port}`)
        });
    } catch (error) {
        console.log(error)
    }
};

start();
