function Nav({ activeLink, setActiveLink }) {
    const handleClick = (link) => {
        setActiveLink(link);
    };
  
    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                    <li className={activeLink === '/' ? 'active' : ''}>
                        <Link to="/" onClick={() => handleClick('/')}>
                            Home
                        </Link>
                    </li>
                    <li className={activeLink === '/about' ? 'active' : ''}>
                        <Link to="/about" onClick={() => handleClick('/about')}>
                            About
                        </Link>
                    </li>
                    <li className={activeLink === '/contact' ? 'active' : ''}>
                        <Link to="/contact" onClick={() => handleClick('/contact')}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
  
const mapStateToProps = (state) => {
    return {
        activeLink: state.activeLink,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        setActiveLink: (link) => {
            dispatch({ type: 'SET_ACTIVE_LINK', payload: link });
        },
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Nav);