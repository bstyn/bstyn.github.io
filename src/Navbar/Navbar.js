import "./navbar.css"
function Navbar(){
    return(
        <nav className="navBar">
            <ul className="contentList">
                <li><a href="/">Home</a></li>
                <li><a href="/">News</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="about">About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;