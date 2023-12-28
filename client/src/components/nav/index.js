import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchAuthUser, setActiveLink } from "../../redux";
import { Link } from 'react-router-dom';


const AVATAR = 'https://0.gravatar.com/avatar/4dee36bffb5d40001150a970a6a974990f520b5ddf1044ce34a83c7f0230d7eb?size=128';


const Nav = ({ authUserData, fetchAuthUser, navActive, setActiveLink }) => {
    useEffect( () => {
        fetchAuthUser()
    }, [])
    // console.log('authUserData', authUserData)
    function renderContent() {
        return authUserData.loading ? (
            <h2>Loading</h2>
        ) : authUserData.error ?  (
            <li><a className="waves-effect waves-light btn" href="/api/logout">refresh</a></li>
        ) : authUserData.user ? (
            <li><a className="waves-effect waves-light btn" href="/api/logout">Logout</a></li>
        ) : (
            <li><a className="waves-effect waves-light btn" href="/auth/google">Login With Google</a></li>
        )
    }

    
    
    

    // console.log(navActive)
    function handleClick(link) {
       setActiveLink(link)
    }
    
    return(
        <nav className="#757575 grey darken-1">
            <div className="container nav-wrapper">

                <ul className="left">
                    <li className={`${(navActive.link === '/' || navActive.link === '/dashboard') ? 'active' : ''}`}>
                        <Link className="waves-effect waves-light btn" to={authUserData.user ? '/dashboard' : '/'} onClick={() => handleClick('/')}>Home</Link>                        
                    </li>
                    <li className={navActive.link === '/blogs' ? 'active' : ''}>
                        <Link className="waves-effect waves-light btn" to={'/blogs'} onClick={() => handleClick('/blogs')}>Blogs</Link>
                    </li>
                    <li className={navActive.link === '/contact' ? 'active' : ''}>
                        <Link className="waves-effect waves-light btn" to={'/contact'} onClick={() => handleClick('/contact')}>Contact</Link>
                    </li>                    
                </ul> 

                <Link to={authUserData.user ? '/dashboard' : '/'} className="brand-logo center" onClick={() => handleClick('/')}>
                    <i className="material-icons">
                        <img src={AVATAR} alt="avatar" style={{ width: 60, borderRadius: '50%' }} />
                    </i>
                </Link>

                <ul className="right">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        authUserData: state.authUser,
        navActive: state.navActive
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAuthUser: () => dispatch(fetchAuthUser()),
        setActiveLink: (link) => dispatch(setActiveLink(link))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);