import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { CustomRow, CustomP, CustomPAlignLeft, CustomH3 } from '../customStyle'
import { fetchResumeSummary } from '../../../redux/resumeSummary/actions'

function Summary({authUser, resumeSummary, fetchResumeSummary}) {
    useEffect(() => {
        fetchResumeSummary()
    }, [fetchResumeSummary])

    if(resumeSummary.loading) {
        return (
            <>
                <CustomH3>Summary</CustomH3>
                <CustomRow>
                    <CustomPAlignLeft>
                        <h2>Loading...</h2>
                    </CustomPAlignLeft>                   
                </CustomRow>
            </>
        )
    } else if (resumeSummary.error != '') {
        return (
            <>
                <CustomH3>Summary</CustomH3>
                <CustomRow>
                    <CustomPAlignLeft>
                    <h4>{resumeSummary.error}</h4>
                    <p>Please refresh the page.</p>
                    </CustomPAlignLeft>                   
                </CustomRow>
            </>  
        )
    } else if (resumeSummary.loading === false && resumeSummary.data.length != 0) {
        return resumeSummary.data?.map((item) => (
            <>
                <CustomH3>Summary</CustomH3>
                <CustomRow>
                    <CustomPAlignLeft>
                        {item.summary}
                    </CustomPAlignLeft> 
                    {renderModal(authUser)}                   
                </CustomRow>
            </>  
        ))
    }
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
        authUser: state.authUser,
        resumeSummary: state.resumeSummary
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchResumeSummary: () => dispatch(fetchResumeSummary())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Summary);