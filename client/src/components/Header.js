import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions'
import { Link } from 'react-router-dom';
import './Header.css'

const AVATAR = 'https://0.gravatar.com/avatar/4dee36bffb5d40001150a970a6a974990f520b5ddf1044ce34a83c7f0230d7eb?size=128';

class Header extends Component {
   
    renderContent() {
        // console.log(this.props.auth)
        switch (this.props.auth) {
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

    handleClick(clickedLink) {
        this.props.setActiveLink(clickedLink)        
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper #757575 grey darken-1">
                    <ul className="left">
                        <li className={`${this.props.navActive.activeLink === '/' ? 'active' : ''}`}>
                            <Link to={'/'} onClick={() => this.handleClick('/')}>Home</Link>
                        </li>
                        <li className={this.props.navActive.activeLink === '/surveys' ? 'active' : ''}>
                            <Link to={'/surveys'} onClick={() => this.handleClick('/surveys')}>Surveys</Link>
                        </li>
                        <li className={this.props.navActive.activeLink === '/surveys/new' ? 'active' : ''}>
                            <Link to={'/surveys/new'} onClick={() => this.handleClick('/surveys/new')}>Contact</Link>
                        </li>
                    </ul>
                    <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo center">
                        <i className="material-icons">
                            <img src={AVATAR} alt="avatar" style={{ width: 60, borderRadius: '50%' }} />
                        </i>
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth, navActive }) {
    console.log('navActive', navActive)
    return { auth, navActive }
}
// const link = '/surveys'


export default connect(mapStateToProps, actions)(Header);