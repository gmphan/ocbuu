import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from '../nav'
import Home from "../../pages/home"
import Dashboard from "../dashboard";
import Blogs from "../../pages/blogs";
import Contact from "../../pages/contact";
import Resume from "../../pages/resume"
import UsersContainer from "../usersContainer";



const App = (props) => {
    // console.log('props in App', props)
    // props.fetchUser();    
    
    /**
     * below are the default state of activeLink
     * Even I already set default from navReducer.js
     * without the below, after refresh the page, 
     * the nav would show active on home even the url
     * says something different - because of the default state
     */
    // props.setActiveLink(window.location.pathname);

    return (
        <div className="container-fluid #e0e0e0 grey lighten-2">
            <BrowserRouter>
                <Nav />
                {/* <Header /> */}
                {/* <UsersContainer /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


// export default connect(null, actions)(App);
export default App;
