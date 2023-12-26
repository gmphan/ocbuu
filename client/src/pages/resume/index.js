import { resumeHeaderData, summaryData, experienceData, educationData, skillData, certData, additionalData } from "../../data/resumeData";
import ResumeHeader from "../../components/resume/header"
import { Helmet } from "react-helmet";

const Resume = () => {
    return (
        <div>
            <Helmet>
                <title>Resume</title>
            </Helmet>
            <ResumeHeader data={ resumeHeaderData } />
        </div>
    )
}

export default Resume