import React, { useEffect, useState } from "react";
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {CustomRow, CustomPAlignLeft, CustomPAlignRight, CustomH3} from './../customStyle'
import { connect } from 'react-redux';
import { fetchResumeExperience } from "../../../redux";
import ExperienceForm from "./experienceForm";

function Experience({fetchResumeExperience, resumeExperience}) {
    useEffect( () => {
        fetchResumeExperience()
    }, [fetchResumeExperience])

    // console.log(resumeExperience.data[0])
    
     /**
     * inputData will be sent over to addNew and edit form
     * the init inputData will be an empty array at first because 
     * resumeExperience was empty as initstate from actions
     * until setInputData called in toggleAddNewModal
     */
    const [inputData, setInputData] = useState(resumeExperience.data)
    console.log('inputData', inputData)

    const [addNewModal, setAddNewModal] = useState(false);
    const toggleAddNewModal = () => {
        setInputData({
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

        // set isOpen to true 
        setAddNewModal(!addNewModal)
    }

    /**
     * This is for Add New button and the button will bring up add-new-form modal
     */
    const modalAddNew = (
        <>
            <Row>
                <Col md={6}>
                    <CustomH3>Experiences</CustomH3>
                </Col>
                <Col md={6}>
                    <CustomPAlignRight>
                        <Button color="primary" className="btn-modal" onClick={toggleAddNewModal}>Add New</Button>
                </CustomPAlignRight>
                </Col>
            </Row>
            <Row>
                <Modal size='lg' isOpen={addNewModal} toggle={() => setAddNewModal(false)}>
                    <ModalHeader>New Experience</ModalHeader>
                    <ModalBody><ExperienceForm inputData={inputData}/></ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={ () => setAddNewModal(false) }>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </Row>
        </>
    )
    
    /**
     * Go through an array of experience objects which was set to 
     * inputData from the begining of this component
     * to print each experience object out on browser
     */
    const experienceDisplay = resumeExperience.data?.sort((a, b) =>
        a.currentlyWorkHere === false ? -1 :
        a.currentlyWorkHere === true ? 1 :
        a.endWorkingYear > b.endWorkingYear ? -1 :
        a.endWorkingYear < b.endWorkingYear ? 1 :
        a.endWorkingMonth > b.endWorkingMonth ? -1 : 1
    ).map((eachExperienceObj) => {
        let description = includeBulletPoint(eachExperienceObj.description)
        return(
            <CustomRow id={eachExperienceObj._id} key={eachExperienceObj._id}>
                <CustomPAlignLeft>
                    <h3><strong>{eachExperienceObj.jobTitle}</strong></h3>
                    <h5><i>{ eachExperienceObj.company }</i></h5>
                    <span dangerouslySetInnerHTML={{__html:description}}></span><br />
                    
                
                </CustomPAlignLeft>
                <CustomPAlignRight>
                    <h5><strong>
                        { 
                            (!eachExperienceObj.currentlyWorkHere)?
                            eachExperienceObj.startWorkingMonth + '  ' + eachExperienceObj.startWorkingYear +
                            ' to ' + eachExperienceObj.endWorkingMonth + ' ' + eachExperienceObj.endWorkingYear :
                            eachExperienceObj.startWorkingMonth + ' ' + eachExperienceObj.startWorkingYear +
                            ' to ' + eachExperienceObj.currentlyWorkHere
                        }
                    </strong></h5>
                </CustomPAlignRight>

            </CustomRow>
        )
    })

    return (<>
        {modalAddNew}
        {experienceDisplay}
    </>)
}

function includeBulletPoint(dataString){
    
    /**
     * replaces all occurrences of one or more whitespace characters 
     * or new lines with a single space character. The trim() method 
     * removes any leading or trailing spaces from the resulting string.
     */
    const noExtraSpaceString = dataString.replace(/[\s\n]+/g, ' ').trim();

    // add each sentence into a sentences Array. The below some how create an empty sentence
    let sentences = noExtraSpaceString.split(".");
    let sentenceArr = []
    for (let sentence of sentences){
        if(sentence !== ''){
            sentenceArr.push(`<li>${sentence}.</li> \n`)
        }        
    }
    let newParagraph = `<ul style="margin:0"> \n ${sentenceArr.join("")}</ul>`
    
    // console.log(newParagraph)
    return newParagraph
}

const mapStateToProps = state => {
    return {
        resumeExperience: state.resumeExperience
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchResumeExperience: () => dispatch(fetchResumeExperience())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);