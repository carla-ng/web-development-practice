import logo from './../assets/images/airbnb/airbnb_logo.png';

function AirbnbNavbar() {
    return (
        <nav className="airbnb-navbar">
            <img src={logo} className="navbar-logo"/>
        </nav>
    )
}

export default AirbnbNavbar;