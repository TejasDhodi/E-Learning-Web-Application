const mongoose = require('mongoose');

const connectToDataBase = async () => {

    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('Connection Established');
    } catch (error) {
        console.log('Unable to Establish the Connection', error);
    }
};

module.exports = connectToDataBase;
