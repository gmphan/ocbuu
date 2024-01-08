import ResumeHeader from "../../components/resume/header"
import {Container} from "reactstrap"
import { Helmet } from "react-helmet";

const Resume = () => {
    return (
        <Container style={{}}>
            <Helmet>
                <title>Resume</title>
            </Helmet>
            <ResumeHeader />
        </Container>
    )
}

export default Resume