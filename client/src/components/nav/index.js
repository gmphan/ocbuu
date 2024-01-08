import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { fetchAuthUser } from "../../redux";
import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem
} from 'reactstrap';
import { NavLink as RRNavLink} from "react-router-dom"
import myLogo from '../../assets/ocbuuLogo.png'

const AVATAR = 'https://0.gravatar.com/avatar/4dee36bffb5d40001150a970a6a974990f520b5ddf1044ce34a83c7f0230d7eb?size=128';

function NavBar({authUserData, fetchAuthUser}) {
    useEffect( () => {
        fetchAuthUser()
    }, []) 

    // console.log(authUserData)
    function renderContent() {
        return authUserData.loading ? (
            <Col><Button color="primary" outline>Loading</Button></Col>
        ) : authUserData.error ?  (
            <Col><a className="btn btn-outline-primary" href="/api/logout">Refresh</a></Col>
        ) : authUserData.user ? (
            <Col><a className="btn btn-outline-primary" href="/api/logout">Logout</a></Col>
        ) : (
            <Col><a className="btn btn-outline-primary" href="/auth/google">Login With Google</a></Col>
        )
    }

    return (
      <>
        {/* 
                d-flex - on a parent element like a control index. Any child with d-flex will follow 
                align from the parent.
                align-items-center - will get child div to stay in the center of div parrent.
                justify-content-right/center/left - will get the content to righ/center/left.

                NavLink in react-router-dom has function to set a nav item active and nonactive,
                but since I'm using NavLink from Reactstrap, then I have to find away to include 
                the one from react-router-dom to the code by passing in tag prop. 
            */}
            <Navbar fixed="top" color="dark" dark expand='md' className="">
                <Container>   
                    <Row className="d-flex align-items-center position-relative">
                        <Col md={1} className="d-flex align-items-center" style={{paddingRight:'1px'}}>
                            <Nav>
                                <NavItem>
                                    <NavLink to={authUserData.user ? '/dashboard' : '/'} tag={RRNavLink}>
                                        <img src={AVATAR} alt="avatar" className="rounded-circle" style={{ width: 60 }} />
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            {/* <img src={AVATAR} alt="avatar" className="rounded-circle" style={{ width: 50 }} /> */}
                        </Col>
                        <Col md={4} className="d-flex align-items-center" style={{paddingLeft:'0px'}}>
                            <Nav pills>                               
                                <NavItem>
                                    <NavLink to={authUserData.user ? '/dashboard' : '/'} tag={RRNavLink}>Home</NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink to="/about" tag={RRNavLink}>About</NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink to="/blogs" tag={RRNavLink}>Blogs</NavLink>
                                </NavItem>        
                                <NavItem>
                                    <NavLink to="/contact" tag={RRNavLink}>Contact</NavLink>
                                </NavItem>    
                                <NavItem>
                                    <NavLink to="/resume" tag={RRNavLink}>Resume</NavLink>
                                </NavItem>                 
                            </Nav>
                        </Col>
                        <Col md={2} className="d-flex align-items-center justify-content-center">
                            <NavbarBrand className="d-flex">
                                <NavLink to={authUserData.user ? '/dashboard' : '/'} tag={RRNavLink} >
                                    {/* <img src={myLogo} alt="logo" className="" style={{ width: 80 }}/> */}
                                </NavLink>
                            </NavbarBrand>
                        </Col>
                        <Col md={5} className="d-flex align-items-center justify-content-end" style={{paddingRight:'0px'}}>
                            <Form className="d-flex" >
                                <Col ><Input type='search' placeholder="search" size={30}/></Col>
                                <Col style={{marginLeft:'5px'}}><Button type="submit" color="primary" outline>Search</Button></Col>
                                {renderContent()}
                            </Form>                  
                        </Col>
                    </Row>                 
                </Container>
            </Navbar>
      </>
    );
  }
  



const mapStateToProps = state => {
    return {
        authUserData: state.authUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAuthUser: () => dispatch(fetchAuthUser()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);