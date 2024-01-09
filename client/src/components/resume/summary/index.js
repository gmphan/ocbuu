import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { CustomRow, CustomP, CustomPAlignLeft, CustomH3 } from '../customStyle'

function Summary({authUser}) {

    return(
        <>
        <CustomH3>Summary</CustomH3>
        <CustomRow>
            <CustomPAlignLeft>
            I have been working as a developer since 2014 and I am passionate about programming. 
            Over the years, I have gained experience in various programming languages and environments, 
            including C#, Java, PHP, and JavaScript. In particular, I have been using JavaScript 
            extensively and it has become my favorite language in recent years. I have worked on 
            many projects using Node.js and I absolutely love it. I was fortunate to work with some 
            brilliant developers at Clayton State University, where we developed several applications 
            using Node.js. We used new frameworks like Hapi and Fastify, which did not have many 
            pre-built packages. This forced me to learn how to bundle different packages together or 
            write my own modularity packages to achieve what we wanted. We even created our own 
            deployment environment using Kubernetes, Docker Swarm, and Crontab, and containerized 
            everything. Recently, I have started using Express.js and React.js to focus on larger 
            implementations with the help of pre-built packages from larger communities. All the 
            configuration from the bare-bone development in the past has paid off so well that I can 
            easily understand and implement any package from any developer or developing community. 
            I hope to continue my passion for programming and problem-solving for as long as possible 
            and enjoy being a developer.
            </CustomPAlignLeft>
            {renderModal(authUser)}
        </CustomRow>
        </>  
    )

}

function renderModal(authUser) {
    const modal =  authUser.loading ? (
        <p>loading</p>
    ) : authUser.error ?  (
        <p>{authUser.error}</p>
    ) : authUser.user ? (
        <>
            <Row>
                {/* <Col md='4'></Col> */}
                <Col md="12" style={{textAlign:'center'}}><Button color='primary'  style={{marginTop:20}}>Edit</Button></Col>
                {/* <Col md='4'></Col>  */}
            </Row>          
        
            
        </>
    ) : (
        <></>
    )

    return modal
}

const mapStateToProps = state => {
    return {
        authUser: state.authUser
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Summary);