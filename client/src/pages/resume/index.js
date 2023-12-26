import ResumeHeader from "../../components/resume/header"
import { Helmet } from "react-helmet";

const Resume = () => {
    return (
        <div>
            <Helmet>
                <title>Resume</title>
            </Helmet>
            <ResumeHeader />
        </div>
    )
}

export default Resume