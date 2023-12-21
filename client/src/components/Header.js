import React from "react";
import { connect } from 'react-redux';
import * as actions from '../actions'
import { Link } from 'react-router-dom';
import './Header.css'

const AVATAR = 'https://0.gravatar.com/avatar/4dee36bffb5d40001150a970a6a974990f520b5ddf1044ce34a83c7f0230d7eb?size=128';


const Header = (props) => {
    function renderContent() {
        // console.log(this.props.auth)
        switch (props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                )
            default:
                return (
                    <li><a href="/api/logout">Logout</a></li>
                )               
        }
    }



    function handleClick(clickedLink) {
        props.setActiveLink(clickedLink)        
    }
    
    return(
        <nav>
            <div className="nav-wrapper #757575 grey darken-1">
                <ul className="left">
                    <li className={`${props.currentState === '/' ? 'active' : ''}`}>
                        <Link to={props.auth ? '/dashboard' : '/'} onClick={() => handleClick('/')}>Home</Link>                        
                    </li>
                    <li className={props.currentState === '/blogs' ? 'active' : ''}>
                        <Link to={'/blogs'} onClick={() => handleClick('/blogs')}>Blogs</Link>
                    </li>
                    <li className={props.currentState === '/contact' ? 'active' : ''}>
                        <Link to={'/contact'} onClick={() => handleClick('/contact')}>Contact</Link>
                    </li>                    
                </ul>

                <Link to={props.auth ? '/dashboard' : '/'} className="brand-logo center">
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


function mapStateToProps(state) {
    return {
            currentState : state.navActive,
            auth: state.auth
        }
}
export default connect(mapStateToProps, actions)(Header);