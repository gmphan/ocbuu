import React, { useState } from "react";
import { connect } from 'react-redux';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { postResumeHeader } from '../../../redux'


const HeaderForm = (props) => {
    
    let resumeHeader = props.resumeHeader
    const [formData, setFormData] = useState(resumeHeader.data[0])
    
    return (
        <>
        <Form onSubmit={handleSave} key={resumeHeader.data[0]._id}>
            <FormGroup row>
                <Label for="firstName" sm={2}>First Name</Label>
                <Col sm={10}>
                    <Input type='text' name='firstName' placeholder='your first name' value={formData.firstName} onChange={handleChange} />
                </Col>                
            </FormGroup>  
            <FormGroup row>
                <Label for="lastName" sm={2}>Last Name</Label>
                <Col sm={10}>
                    <Input type='text' name='lastName' placeholder='your last name' value={formData.lastName} onChange={handleChange} />
                </Col>                
            </FormGroup> 
            <FormGroup row>
                <Label for="headLine" sm={2}>Head Line</Label>
                <Col sm={10}>
                    <Input type='text' name='headLine' placeholder='your headline' value={formData.headline} onChange={handleChange} />
                </Col>                
            </FormGroup> 
            <FormGroup row>
                <Label for="phoneNum" sm={2}>Phone Number</Label>
                <Col sm={10}>
                    <Input type='text' name='phoneNum' placeholder='your phone number (optional)' value={formData.phoneNum} onChange={handleChange} />
                </Col>                
            </FormGroup> 
            <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input type='text' name='email' placeholder='your email' value={formData.email} onChange={handleChange} />
                </Col>                
            </FormGroup> 
            <FormGroup row>
                <Label for="country" sm={2}>Country</Label>
                <Col sm={10}>
                    <Input type='text' name='country' placeholder='your country' value={formData.country} onChange={handleChange} />
                </Col>                
            </FormGroup> 
            <FormGroup row>
                <Label for="streetAddress" sm={2}>Street Address</Label>
                <Col sm={10}>
                    <Input type='text' name='streetAddress' placeholder='your street address' value={formData.streetAddress} onChange={handleChange} />
                </Col>                
            </FormGroup> 
            <FormGroup row>
                <Label for="cityState" sm={2}>City and State</Label>
                <Col sm={10}>
                    <Input type='text' name='cityState' placeholder='your city, state' value={formData.cityState} onChange={handleChange} />
                </Col>                
            </FormGroup> 
            <FormGroup row>
                <Label for="zipCode" sm={2}>Zip Code</Label>
                <Col sm={10}>
                    <Input type='text' name='zipCode' placeholder='your zip code' value={formData.zipCode} onChange={handleChange} />
                </Col>                
            </FormGroup> 
            <FormGroup row>
                <Label for="linkIn" sm={2}>LinkedIn Link</Label>
                <Col sm={10}>
                    <Input type='text' name='linkedIn' placeholder='your Linked In link' value={formData.linkIn} onChange={handleChange} />
                </Col>                
            </FormGroup> 
            <FormGroup row>
                <Label for="gitHub" sm={2}>GitHub link</Label>
                <Col sm={10}>
                    <Input type='text' name='gitHub' placeholder='your github link' value={formData.gitHub} onChange={handleChange} />
                </Col>                
            </FormGroup> 
            <FormGroup check row>
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
        props.postResumeHeader(formData)
        e.target.reset()
        props.setModal(false)
    }
}
const mapStateToProps = state => {
    return {
        resumeHeader: state.resumeHeader
    }
}
const mapDispatchToProps = dispatch => {
    return {
        postResumeHeader: (data) => dispatch(postResumeHeader(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderForm);