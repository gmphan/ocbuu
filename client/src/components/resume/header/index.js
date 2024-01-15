import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {CustomRow} from './../customStyle'
import { connect } from 'react-redux';
import { fetchResumeHeader } from '../../../redux'
import HeaderForm from './headerForm';
// import { nanoid } from "nanoid";


const ResumeHeader = ({resumeHeader, fetchResumeHeader, authUser}) => {
    
    useEffect( () => {
        fetchResumeHeader()        
    }, [fetchResumeHeader])

    const [editModal, setEditModal] = useState(false);

    

    if(resumeHeader.loading) {
        return (
            <div>
                <h2>Loading</h2>
            </div>
        )
    } else if (resumeHeader.error !== '') {
        return (
            <div>
                <h4>{resumeHeader.error}</h4>
                <p>Try to refresh the page first</p>
            </div>
        )
    } else if (resumeHeader.loading === false && resumeHeader.data.length !== 0){
        return resumeHeader.data?.map((item) => (
            <CustomRow id={item._id} key={item._id} style={{textAlign:'center', marginBottom:10, marginTop:20}}>
                
                <h2>{item.firstName + ' ' + item.lastName}</h2>
                <p>
                    {item.headline}<br/>
                    {/* {item.phoneNum}<br/> */}
                    {item.email}<br/>
                    {item.cityState + ' ' + item.zipCode}<br/>
                    <a href="/contact" rel="noopener noreferrer" >Contact Me</a><br/>
                    <a href={item.linkIn} target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
                    <a href={item.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a><br/>
                </p>  
                {renderModal(item)}
                
            </CustomRow>
            
        ))  
    } 

    /**
     * This is part is for Modal setting
     */
    function toggleEditModal () {
        setEditModal(!editModal);
    }

    function renderModal(item) {
        return authUser.loading ? (
            <p>loading</p>
        ) : authUser.error ?  (
            <p>{authUser.error}</p>
        ) : authUser.user ? (
            <>
                <Row>
                    {/* <Col md='4'></Col> */}
                    <Col md="12" style={{textAlign:'center'}}><Button color='primary' onClick={() => toggleEditModal()}  style={{}}>Edit</Button></Col>
                    {/* <Col md='4'></Col>  */}
                </Row>          
                
                <Modal size='lg' isOpen={editModal} toggle={ () => setEditModal(false)} centered>
                    <ModalHeader>Editing Resume Header</ModalHeader>
                    <ModalBody><HeaderForm setModal={setEditModal}/></ModalBody>
                    <ModalFooter>
                        <Button className='btn-modal' color='secondary' onClick={ () => setEditModal(false)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        ) : (
            <></>
        )
    }


}

const mapStateToProps = state => {
    return {
        resumeHeader: state.resumeHeader,
        authUser: state.authUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchResumeHeader: () => dispatch(fetchResumeHeader())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ResumeHeader);