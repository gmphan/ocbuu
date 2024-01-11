const mongoose = require('mongoose');
const { Schema } = mongoose;

const resumeSummarySchema = new Schema({
        summary: String,
        createdDate: Date,
        updatedDate: Date
})

mongoose.model('resumeSummary', resumeSummarySchema);