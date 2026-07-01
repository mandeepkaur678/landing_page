import { NavLink } from "react-router-dom"

function Header(){
    return(
        <>
        <h1>tekup</h1>
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/about">About</NavLink> 
        <NavLink to="/contact">Contact</NavLink>
        
        </>
    )
}

export default Header