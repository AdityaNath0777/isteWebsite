import { NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <li className='home-nav' ><NavLink exact activeClassName="active" to="/home">Home</NavLink></li> 
                <li className='about-nav'><NavLink exact activeClassName="active" to="/about" >About</NavLink></li>
                <li className='projects-nav'><NavLink exact activeClassName="active" to="/project">Projects</NavLink></li>
                <li className='events-nav'><NavLink  exact activeClassName="active" to="/event">Events</NavLink></li>
                <li className='contact-nav'><NavLink exact activeClassName="active" to="/contact">Contact Us</NavLink></li>
                <li className='alumini-nav'><NavLink exact activeClassName="active" to="/alumni">Alumni</NavLink></li>
            </div>
        </nav>
    )
}

export default Navbar;