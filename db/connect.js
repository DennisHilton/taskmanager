const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Dennis:1234@cluster007.loznw5j.mongodb.net/Task-Manager?retryWrites=true&w=majority'

const connectDB = (url) => {
    return  mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(()=> console.log('CONNECTED TO THE DB...'))
}
    module.exports = connectDB