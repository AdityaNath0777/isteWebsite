import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <li><Link to="/home" className="active">Home</Link></li> 
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="#">Events</Link></li>
                <li><Link to="#">Contact Us</Link></li>
                <li><Link to="#">Alumni</Link></li>
            </div>
        </nav>
    )
}

export default Navbar;