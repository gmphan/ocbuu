import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from "./Header";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Blogs from "./Blogs";
import Contact from "./Contact";




const App = (props) => {
    console.log('props in App', props)
    props.fetchUser();    
    
    /**
     * below are the default state of activeLink
     * Even I already set default from navReducer.js
     * without the below, after refresh the page, 
     * the nav would show active on home even the url
     * says something different - because of the default state
     */
    props.setActiveLink(window.location.pathname);

    return (
        <div className="container #e0e0e0 grey lighten-2">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default connect(null, actions)(App);
