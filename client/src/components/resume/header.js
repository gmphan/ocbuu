import React from 'react';
// import { connect } from 'react-redux';
// import { nanoid } from "nanoid";

const ResumeHeader = (props) => {
    const headerInfo = props.data?.map((item) => (
        <div className="row" id={item.id} key={item.id} style={{textAlign:'center'}}>
            <h1>
                {props.resumeHeaderReducer}
            </h1>
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
    return ( 
        <>
            {headerInfo}
        </> 
     );
}
export default ResumeHeader;