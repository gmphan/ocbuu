const mongoose = require('mongoose');
const { Schema } = mongoose;

const resumeHeaderSchema = new Schema({
        firstName: String,
        lastName: String,
        headline: String,
        phoneNum: String, //should be optional
        email: String,
        country: String,
        streetAddress: String,
        cityState: String,
        zipCode: String,
        linkIn: String,
        gitHub: String,
        createdDate: Date,
        updatedDate: Date
})

mongoose.model('resumeHeader', resumeHeaderSchema);