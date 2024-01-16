const mongoose = require('mongoose');
const { Schema } = mongoose;

const resumeExperienceSchema = new Schema({
    jobTitle: String,
    company: String,
    country: String,
    cityState: String,
    zipCode: Number,
    currentlyWorkHere: Boolean,
    startWorkingMonth: String,
    startWorkingYear: String,
    endWorkingMonth: String,
    endWorkingYear: String,
    description: String,
    createdDate: Date,
    updatedDate: Date
})


mongoose.model('resumeExperience', resumeExperienceSchema)