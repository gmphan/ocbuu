const mongoose = require('mongoose')


const ResumeHeader = mongoose.model('resumeHeader');
const ResumeSummary = mongoose.model('resumeSummary');

module.exports = async (app) => {

    app.get('/api/resume/summary', async(req, res) => {
        let resumeSummary
        try {

            // the below ResumeSummary (model) have to be Capitalized 
            resumeSummary = await ResumeSummary.find().limit(1).sort({$natural:-1})
            
            res.send(resumeSummary)
        } catch (error) {
            res.status(422).send(error)
        }
    })

    app.get('/api/resume/header', async (req, res) => {
        // let googleId = req.user.googleId;
        let resumeHeader
        try {
            /**
             * Get the latest document insert from ResumeHeader selection
             */
            resumeHeader = await ResumeHeader.find().limit(1).sort({$natural:-1})
            // console.log(resumeHeader)
            // get the record by google Id
            // result = await ResumeHeader.findOne({googleId})

            res.send(resumeHeader) //
        } catch (error) {
            res.status(422).send(error)
        }
        
    })

    app.get('/api/resume', async (req, res) => {
        let result
        try {
            /**
             * this is a public endpoint no need authorization.
             * Get the latest document insert from Resume selection
             * remember selection like a table, each document like a each row
             * Don't use googleId because I want to show my resume at all time
             * not just when sign in. 
             */
            result = await Resume.find().limit(1).sort({$natural:-1})
            res.send(result)

        } catch (error) {
            res.status(422).send(error)
        }
    })

    
    app.post('/api/resume/header', async (req, res) => {
        // console.log('headerBody', req.body)
        const {
            _id, 
            firstName, 
            lastName, 
            headline, 
            phoneNum,
            email, 
            country, 
            streetAddress, 
            cityState,
            zipCode, 
            linkIn, 
            gitHub
        } = req.body;
        
        const resumeHeaderData = new ResumeHeader({
            // id will be automatically created by MongoDb
            firstName, 
            lastName, 
            headline, 
            phoneNum,
            email, 
            country, 
            streetAddress, 
            cityState,
            zipCode, 
            linkIn, 
            gitHub, 
            createdDate: new Date(),
            updatedDate: new Date()
        })
        try {
            let result
            
            const existingRecord = await ResumeHeader.findOne({_id})
            if(existingRecord) {
                result = await ResumeHeader.findByIdAndUpdate({_id}, 
                    {
                        firstName, 
                        lastName, 
                        headline, 
                        phoneNum,
                        email, 
                        country, 
                        streetAddress, 
                        cityState,
                        zipCode, 
                        linkIn, 
                        gitHub,
                        updatedDate: new Date()
                    },                           
                    {
                        upsert: true,
                        runValidators: true
                    })
            } else if(!existingRecord) {
                result = await resumeHeaderData.save();
                res.send (result)
            }
            res.send(result._id)
        } catch (error) {
            // res.status(422).send(error)
        }
        
    })
}