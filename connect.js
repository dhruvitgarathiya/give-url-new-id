import { connect } from 'mongoose';

async function connecttodb(url){
    try{
        await connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Timeout after 30 seconds
            socketTimeoutMS: 45000, // Socket timeout
           
        });
        console.log('Connected to MongoDB');
    }catch(err){
        console.log('Error connecting to MongoDB:', err);
    }

}

export default connecttodb;
