import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchResumeHeader, postResumeHeader } from '../../redux'
// import { nanoid } from "nanoid";


const ResumeHeader = (props) => {
    useEffect( () => {
        props.fetchResumeHeader()
        // props.postResumeHeader()
    }, [props.fetchResumeHeader])
    
    
    return props.resumeHeader.data?.map((item) => (
        
        <div className="row" id={item._id} key={item._id} style={{textAlign:'center'}}>
            <h1>{item.firstName + ' ' + item.lastName}</h1>
                <p>
                    {item.headLine}<br/>
                    {/* {item.phoneNum}<br/> */}
                    {item.email}<br/>
                    {item.cityState + ' ' + item.postalCode}<br/>
                    {item.employmentEligibility}<br/>
                    <a href="/contact" target="_blank" rel="noopener noreferrer" >Contact Me</a><br/>
                    <a href="https://www.linkedin.com/in/giang-phan-b9a66270" target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
                    <a href="https://github.com/gmphan" target="_blank" rel="noopener noreferrer">GitHub</a><br/><br/>
            </p>
            {/* <Col md='8' className="" style={{}}></Col> */}
            {/* <Col md='4'></Col> */}
            {/* <Col md='4'></Col> */}
            
        </div>
    ))
}

const mapStateToProps = state => {
    // console.log('mapState', state.resumeHeader)
    return {
        resumeHeader: state.resumeHeader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchResumeHeader: () => dispatch(fetchResumeHeader()),
        postResumeHeader: () => dispatch(postResumeHeader())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeHeader);