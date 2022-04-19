import mongoose from "mongoose";

export async function dbConection() {

    console.log('database being connecting...')

    const devMode = false;

    await mongoose.connect(devMode ? 'mongodb+srv://arun:1234@cluster0.t3qon.mongodb.net/login-microservice?retryWrites=true&w=majority' : 'mongodb://localhost:27017/login-micorservice', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    const conSuccess = mongoose.connection;
    conSuccess.on('error', console.error.bind(console, 'connection error:'));

    console.log('MongoDB Connected')

}