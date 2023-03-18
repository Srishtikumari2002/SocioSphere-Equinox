function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <img src="logo.png" alt="Website Logo" className="navbar__logo" />
                <div className="navbar__search">
                    <input type="text" placeholder="Search..." className="navbar__search-input" />
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="navbar__right">
                <div className="navbar__icon">
                    <i className="fas fa-user"></i>
                    <span className="navbar__text">Sign Up/Log In</span>
                </div>
                <div className="navbar__icon">
                    <i className="fas fa-comment"></i>
                    <span className="navbar__text">Messages</span>
                </div>
                <div className="navbar__icon">
                    <i className="fas fa-user-circle"></i>
                    <span className="navbar__text">User Profile</span>
                </div>
                <div className="navbar__icon">
                    <i className="fas fa-bell"></i>
                    <span className="navbar__text">Notifications</span>
                </div>
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    );
}

export default Navbar;
