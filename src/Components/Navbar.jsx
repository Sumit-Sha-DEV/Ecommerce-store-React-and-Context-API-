import "./Navbar.css"

import { Link } from "react-router-dom"
import React from 'react'
import { ShoppingCart } from "phosphor-react"

const Navbar = () => {
    return (
        <div className="navbar"> 
        <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>

        </div>
        </div>
    )
}

export default Navbar