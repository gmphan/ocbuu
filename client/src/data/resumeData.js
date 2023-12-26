export const resumeHeaderData = [{
    id: '1',
    firstName: "Giang",
    lastName: "Phan",
    headLine: "Full Stack Developer with a Passion for Building User-Friendly Applications",
    phoneNum: "678 000 0000", //should be optional
    email: "gmphan7@gmail.com",

    Country: "United States",
    streetAddress: "2192 Murry Trail optional",
    cityState: "Morrow, GA",
    postalCode: "30260",
    relocation: "no", //optional

    employmentEligibility: "Authorized to work in the US for any employer"

}]

export const summaryData = [{
    summary:`Summary of about myself and what I have archived.`
}]

export const experienceData = [
    {
        id:'experience-1', //this should auto increment in the database remember this should be unique compare to other table, too 
        // because I might display the same id for different div on the same page, this should include table name and number. 
        jobTitle:'Software Engineer',
        company: 'Clayton State Univerisy',
        country: 'United States',
        cityState: 'Morrow, GA',
        timePeriod: 'I currently work here',
        fromMonth: '05',
        fromYear: '2012',
        toMonth: '10',
        toYear: '2022',
        description: `
        Granting and securing data of Banner System.
        Over seeing and helping Application Administrator tasks from my previous experience.
        Being trained hard in problem solving to become a Software Engineer.`
    },
    {
        id:'experience-2',
        jobTitle:'Data Engineer',
        company: 'Clayton State Univerisy',
        country: 'United States',
        cityState: 'Morrow, GA',
        timePeriod: '',
        fromMonth: '05',
        fromYear: '2012',
        toMonth: '04',
        toYear: '2022',
        description: `
        Granting and securing data of Banner System.
        Over seeing and helping Application Administrator tasks from my previous experience.
        Being trained hard in problem solving to become a Software Engineer.`
    }

]

export const educationData = [
    {
        id: 'edu-0',
        levelOfEducation: `Bachelor's degree`,
        fieldOfStudy: 'Computer Science',
        school: 'Clayton State University',
        country: 'United States',
        schoolLocation: 'Morrow, GA',
        timePeriod: 'not currently enrolled',
        fromMonth: '05',
        fromYear: '2010',
        toMonth: '12',
        toYear: '2013'
    },
    {
        id: 'edu-1',
        levelOfEducation: `High School Diploma`,
        fieldOfStudy: 'High School',
        school: 'Forest Park High School',
        country: 'United States',
        schoolLocation: 'Forest Park, GA',
        timePeriod: 'not currently enrolled',
        fromMonth: 'August',
        fromYear: '2001',
        toMonth: 'May',
        toYear: '2005'
    }
]

export const skillData = [
    {id: 'skill-0', skillName: 'Nodejs', yearOfExperience: 'five years'},
    {id: 'skill-1', skillName: 'PLSQL', yearOfExperience: 'five years'}
]

export const certData = [
    {
        id: 'cert-0',
        certName: 'H+ Basic Certification',
        timePeriod: 'never expire',
        fromMonth: 'May',
        fromYear: '2012',
        toMonth: '',
        toYear: 'Current',
        description: `a computer technical certification from The Hub at Clayton State University.`
    }
]

export const additionalData = [
    {
        id:'experience-1', //this should auto increment in the database remember this should be unique compare to other table, too 
        // because I might display the same id for different div on the same page, this should include table name and number. 
        name:'Software Engineer',
        company: 'Clayton State Univerisy',
        country: 'United States',
        cityState: 'Morrow, GA',
        timePeriod: '',
        fromMonth: 'May',
        fromYear: '2012',
        toMonth: '',
        toYear: '2023',
        description: `Developing small applications/scripts by using PLSQL and Nodejs. Working with Docker, Docker Swarm, and Kubernetes. Over seeing and helping Application Administrator tasks from my previous experience.`
    },
    {
        id:'experience-2',
        name:'Data Engineer',
        company: 'Clayton State Univerisy',
        country: 'United States',
        cityState: 'Morrow, GA',
        timePeriod: '',
        fromMonth: 'May',
        fromYear: '2012',
        toMonth: '',
        toYear: '2022',
        description: `
        Granting and securing data of Banner System.
        Over seeing and helping Application Administrator tasks from my previous experience.
        Being trained hard in problem solving to become a Software Engineer.`
    }

]