import {Link} from "react-router-dom"
import "../styles/Navbar.css"
function Navbar(){
    return (
        <nav className="navbar">
            <h1 className="logo">JARURAT CARE</h1>
            <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/patients">Patients</Link>
            <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Navbar