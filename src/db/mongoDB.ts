import mongoose from 'mongoose';

async function connectDB() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log('MongoDB connected');
    } catch (error: any) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;