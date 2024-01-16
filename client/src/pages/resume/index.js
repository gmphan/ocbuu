import ResumeHeader from "../../components/resume/header"
import Summary from "../../components/resume/summary";
import Experience from "../../components/resume/experience";
import {Container} from "reactstrap"
import { Helmet } from "react-helmet";


const Resume = () => {
    return (
        <Container style={{backgroundColor: ''}}>
            <Helmet>
                <title>Resume</title>
            </Helmet>
            <ResumeHeader />
            <Summary />
            <Experience />
        </Container>
    )
}

export default Resume