import ResumeHeader from "../../components/resume/header"
import Summary from "../../components/resume/summary";
import {Container} from "reactstrap"
import { Helmet } from "react-helmet";


const Resume = () => {
    return (
        <Container style={{}}>
            <Helmet>
                <title>Resume</title>
            </Helmet>
            <ResumeHeader />
            <Summary />
        </Container>
    )
}

export default Resume