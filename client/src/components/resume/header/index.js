import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux';
import { fetchResumeHeader } from '../../../redux'
import HeaderForm from './headerForm';
// import { nanoid } from "nanoid";


const ResumeHeader = ({resumeHeader, fetchResumeHeader}) => {
    
    useEffect( () => {
        fetchResumeHeader()        
    }, [fetchResumeHeader])

    const [editModal, setEditModal] = useState(false);

    /**
     * This is part is for Modal setting
     */
    const toggleEditModal = () => {
        setEditModal(!editModal);
    }

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
            <Row id={item._id} key={item._id} style={{textAlign:'center', marginBottom:-10}}>
                <h2>{item.firstName + ' ' + item.lastName}</h2>
                <p>
                    {item.headline}<br/>
                    {/* {item.phoneNum}<br/> */}
                    {item.email}<br/>
                    {item.cityState + ' ' + item.zipCode}<br/>
                    <a href="/contact" rel="noopener noreferrer" >Contact Me</a><br/>
                    <a href={item.linkIn} target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
                    <a href={item.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a><br/><br/>
                </p>  
                <Row>
                    <Col md='5'></Col>
                    <Col md="2" style={{textAlign:'center'}}><Button color='primary' onClick={() => toggleEditModal()}  style={{}}>Edit</Button></Col>
                    <Col md='5'></Col> 
                </Row>          
                
                <Modal size='lg' isOpen={editModal} toggle={ () => setEditModal(false)} centered>
                    <ModalHeader>Editing Resume Header</ModalHeader>
                    <ModalBody><HeaderForm data={ item } setModal={setEditModal}/></ModalBody>
                    <ModalFooter>
                        <Button className='btn-modal' color='secondary' onClick={ () => setEditModal(false)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Row>
        ))  
    } 
}

const mapStateToProps = state => {
    return {
        resumeHeader: state.resumeHeader
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchResumeHeader: () => dispatch(fetchResumeHeader())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ResumeHeader);