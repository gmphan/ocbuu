import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { CustomRow, CustomPAlignLeft, CustomH3 } from '../customStyle'
import { fetchResumeSummary } from '../../../redux/resumeSummary/actions'
import SummaryEditForm from './SummaryEditForm'

function Summary({authUser, resumeSummary, fetchResumeSummary}) {
    useEffect(() => {
        fetchResumeSummary()
    }, [fetchResumeSummary])

    const [editModal, setEditModal] = useState(false);
    
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
    } else if (resumeSummary.error !== '') {
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
    } else if (resumeSummary.loading === false && resumeSummary.data.length !== 0) {
        return resumeSummary.data?.map((item) => (
            <>
                <CustomH3>Summary</CustomH3>
                <CustomRow>
                    <CustomPAlignLeft>
                        {item.summary}
                    </CustomPAlignLeft> 
                    {renderModal(item)}    
                              
                </CustomRow>
                
            </>  
        ))
    }

    /**
     * This is part is for Modal setting
     */
    function toggleEditModal () {
        setEditModal(!editModal);
    }
    function renderModal(item) {
        const modal =  authUser.loading ? (
            <p>loading</p>
        ) : authUser.error ?  (
            <p>{authUser.error}</p>
        ) : authUser.user ? (
            <>
                <Row>
                    {/* <Col md='4'></Col> */}
                    <Col md="12" style={{textAlign:'center'}}><Button color='primary'  onClick={() => toggleEditModal()} style={{marginTop:20}}>Edit</Button></Col>
                    {/* <Col md='4'></Col>  */}
                </Row>          
    
                <Modal size='lg' isOpen={editModal} toggle={ () => setEditModal(false)} centered>
                    <ModalHeader>Editing Resume Summary</ModalHeader>
                    <ModalBody><SummaryEditForm setModal={setEditModal}/></ModalBody>
                    <ModalFooter>
                        <Button className='btn-modal' color='secondary' onClick={ () => setEditModal(false)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                
            </>
        ) : (
            <></>
        )
    
        return modal
    }
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