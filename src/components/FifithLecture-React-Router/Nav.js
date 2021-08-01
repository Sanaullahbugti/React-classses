import { Link } from "react-router-dom"

const Nav = () => {
    return <div>
        <Link to="/home"><span>Home</span></Link>
        <Link to="/aboutus"><span>About Us</span></Link>
    </div>
}

export default Nav