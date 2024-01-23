import React, { useState } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

const ExperienceForm = (props) => {
    
    const [formData, setFormData] = useState(props.inputData)

    // sepecial for checkbox
    const [checkButton, setCheckButton] = useState(false)
    if(checkButton) {
        formData.currentlyWorkHere = true
    } else {
        formData.currentlyWorkHere = false
    }
    

    // create months and year array 
    const months = [
        { value: 'January',     label: 'January' },
        { value: 'February',    label: 'February' },
        { value: 'March',       label: 'March' },
        { value: 'April',       label: 'April' },
        { value: 'May',         label: 'May' },
        { value: 'June',        label: 'June' },
        { value: 'July',        label: 'July' },
        { value: 'August',      label: 'August' },
        { value: 'September',   label: 'September' },
        { value: 'October',     label: 'October' },
        { value: 'November',    label: 'November' },
        { value: 'December',    label: 'December' },
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 20 }, (_, i) => currentYear - i);
    const addNewTemplate = (        
        <Form onSubmit={handleSumit}>
            <FormGroup row>
                <Label for='jobTitle'>Job Title</Label>
                <Col>
                    <Input required type="text" name="jobTitle" placeholder='job title'  value={formData.jobTitle} onChange={handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for='company'>Company</Label>
                <Col>
                    <Input required type="text" name="company" placeholder='company name'  value={formData.company} onChange={handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for='country'>Country</Label>
                <Col>
                    <Input required type="text" name="country" placeholder='country of the company'  value={formData.country} onChange={handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for='cityState'>City and State</Label>
                <Col>
                    <Input required type="text" name="cityState" placeholder='seperated by a comma'  value={formData.cityState} onChange={handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for='zipCode'>Zip Code</Label>
                <Col>
                    <Input required type="number" name="zipCode" placeholder='enter number'  value={formData.zipCode} onChange={handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for='currentlyWorkHere'>Working Time Period</Label>
                <Col sm={10}>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='currentlyWorkHere' checked={checkButton} value={formData.currentlyWorkHere} onChange={handleChange}/> 
                            Currently Working Here
                        </Label>                            
                    </FormGroup>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for='startWorkingMonth'>From:</Label>
                <Col sm={5}>
                    <Input required type="select" name="startWorkingMonth" placeholder='' onChange={handleChange}>
                        {/* first option would show on the select */}
                        <option value='option1'>select start month</option>
                        {months.map((month) => (
                            <option key={month.value} value={month.value} >
                                {month.label}
                            </option>
                        ))}
                    </Input>
                </Col>
                <Col sm={5}>
                    <Input required type='select' name='startWorkingYear' onChange={handleChange}>
                    <option value='option1'>select end year</option>
                        {years.map((year) => (
                            <option key={year} value={year} >
                                {year}
                            </option>
                        ))}
                    </Input>
                </Col>
            </FormGroup>
            {(!formData.currentlyWorkHere) && <FormGroup row>
                <Label for="endWorkingMonth">To:</Label>
                <Col sm={5}>
                    <Input type="select" name='endWorkingMonth' value={formData.endWorkingMonth} onChange={handleChange}>
                        <option value='option1'>select end month</option>
                        {months.map((month) => (
                            <option key={month.value} value={month.value} >
                                {month.label}
                            </option>
                        ))}
                    </Input>
                </Col>
                <Col sm={5}>
                    <Input type="select" name='endWorkingYear' value={formData.endWorkingYear} onChange={handleChange}>
                        <option value='option1'>select end year</option>
                        {years.map((year) => (
                            <option key={year} value={year} >
                                {year}
                            </option>
                        ))}
                    </Input>
                </Col>
            </FormGroup>}
            <FormGroup row>
                <Label for="description">Description</Label>
                <Col sm={10}>
                    <Input type='textarea' rows={5} name='description' placeholder='' value={formData.description} onChange={handleChange}/>
                </Col>                
            </FormGroup> 
            <FormGroup check row>
                <Col sm={{size:4, offset: 2}}>
                    <Button type='submit' color='primary' className='btn btn_primary btn_lg'>Save</Button>
                </Col>
            </FormGroup>
        </Form>
    )


     /**
     * everytime setFormData run,
     * handleChange get called again ==> new FormData
     * won't change right away right after setFormData 
     */
     function handleChange (event) {
        const { name, value } = event.target;
        
        if(event.target.name === 'currentlyWorkHere') {
            setCheckButton(!checkButton)
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name] : value
        }))
    }

    /**
     * handleSubmit is for add new
     */
    function handleSumit (e) {
        e.preventDefault();

        //need to add post experience here 

        setFormData({
            jobTitle: '',
            company: '',
            country: '',
            cityState: '',
            zipCode: '',
            currentlyWorkHere: '',
            startWorkingMonth: '',
            startWorkingYear: '',
            endWorkingMonth: '',
            endWorkingYear: '',
            description: '',
        })

        e.target.reset();

        setCheckButton(false)
    }

    return (
        <>
        {addNewTemplate}
        </>
        
    )
}

export default ExperienceForm;