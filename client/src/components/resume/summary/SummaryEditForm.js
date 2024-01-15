import React, { useState} from "react";
import { connect } from "react-redux";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { postResumeSummary } from "../../../redux";

const SummaryEditForm = ({resumeSummary, postResumeSummary, setModal}) => {
    //setModal was the only one send from index.js to this form everything else is getting from redux
    try {
        const [formData, setFormData] = useState(resumeSummary.data[0])
        // console.log(formData)
        return( 
            <>
            <Form onSubmit={handleSave} key={formData._id}>
                <FormGroup>
                    {/* <Label for="summary" sm={2}>Summary</Label> */}
                    <Col sm={10}>
                        <Input type='textarea' rows={10} name='summary' placeholder='summary' value={formData.summary} onChange={handleChange} />
                    </Col>     
                </FormGroup>
                <FormGroup>
                    <Col sm={{size:4, offset: 2}}>
                        <Button type='submit' color='primary' className='btn btn_primary btn_lg' style={{marginRight: 20}} >Save</Button>
                    </Col>
                </FormGroup>
            </Form>
            </>
        )


        /**
         * everytime a setCheckButton or setFormData run,
         * handleChange get called again ==> checkButton or new FormData
         * won't change right away right after setCheckButton and setFormData 
         */
        function handleChange(event) {
            const {name, value} = event.target;
            
            setFormData((prevFormData) => ({
                ...prevFormData,
                // updatedDate: new Date(), //done in the backend
                [name]:value
            }))
        }

        function handleSave(e) {
            e.preventDefault();
            postResumeSummary(formData);
            e.target.reset();
            setModal(false)
        }

    } catch (error) {
        console.error(error.message)
    }

    

}



function mapStateToProps(state) {
    return {
        resumeSummary: state.resumeSummary
    }
}
function mapDispatchToProps(dispatch) {
    return {
        postResumeSummary: (postData) => dispatch(postResumeSummary(postData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryEditForm);