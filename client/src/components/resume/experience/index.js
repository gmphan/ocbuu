import React, { useEffect } from "react";
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {CustomRow, CustomPAlignLeft, CustomPAlignRight, CustomH3} from './../customStyle'
import { connect } from 'react-redux';
import { fetchResumeExperience } from "../../../redux";

function Experience({fetchResumeExperience, resumeExperience}) {
    useEffect( () => {
        fetchResumeExperience()
    }, [fetchResumeExperience])

    // console.log(resumeExperience)
    
    // still need to have edit option for each box of data like indeed
    const months = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    }
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
        <CustomH3>Experience</CustomH3>
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