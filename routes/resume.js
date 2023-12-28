const mongoose = require('mongoose')
const ResumeHeader = mongoose.model('resumeHeader')

module.exports = async (app) => {
    app.get('/api/resume/header', async (req, res) => {
        let googleId = req.user.googleId;
        let result
        try {
            /**
             * Get the latest document insert from ResumeHeader selection
             */
            // const result = await ResumeHeader.find().limit(1).sort({$natural:-1})

            // get the record by google Id
            result = await ResumeHeader.findOne({googleId})
            res.send([result]) //return in array so the client can use the map function
        } catch (error) {
            res.status(422).send(error)
        }
        
    })

    
    app.post('/api/resume/header', async (req, res) => {
        const {
            googleId, firstName, lastName, headLine, phoneNum,
            email, country, streetAddress, cityState,
            postalCode, relocation, employmentEligibility, 
            createdDate, updatedDate
        } = req.body;

        const resumeHeaderData = new ResumeHeader({
            // id will be automatically created by MongoDb
            googleId, firstName, lastName, headLine, phoneNum,
            email, country, streetAddress, cityState,
            postalCode, relocation, employmentEligibility, 
            createdDate, updatedDate
        })
        try {
            let result
            const existingRecord = await ResumeHeader.findOne({googleId})
            if(existingRecord) {
                result = await ResumeHeader.findOneAndUpdate({googleId}, 
                    {
                        firstName, firstName, 
                        lastName, headLine, 
                        phoneNum, email, 
                        country, streetAddress, 
                        cityState,postalCode, 
                        relocation, employmentEligibility, 
                        updatedDate: new Date()},
                    {
                        new: true,
                        runValidators: true,
                    })
            } else {
                result = await resumeHeaderData.save();
            }
            res.send(result.googleId)
        } catch (error) {
            res.status(422).send(error)
        }
        
    })
}