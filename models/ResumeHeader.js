const mongoose = require('mongoose');
const { Schema } = mongoose;

const resumeHeaderSchema = new Schema({
    // id will be automatically added by mongodb
    googleId: String,
    firstName: String,
    lastName: String,
    headLine: String,
    phoneNum: String, //should be optional
    email: String,
    country: String,
    streetAddress: String,
    cityState: String,
    postalCode: String,
    relocation: String, //optional
    employmentEligibility: String,
    createdDate: Date,
    updatedDate: Date,
});

mongoose.model('resumeHeader', resumeHeaderSchema);