const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://kalpesh:kalpesh123@cluster0.m5ygc.mongodb.net/panel',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useUnifiedTopology: true
    }
)



mongoose.connection.on('connected', () => {
    console.log("-------------- < Database ( Mongoose As MongoDB ) Connected Succsessfuly > --------------")
})
mongoose.connection.on('error', () => {
    console.log("Database (Mongoose as MongoDB) Not Connected")
})
