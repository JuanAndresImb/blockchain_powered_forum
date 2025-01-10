import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <a href="/" id='logo'>La Sexta Ola</a>
            <nav>
                <ul>
                    <li>
                    <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to='/LoginPage.jsx'>Login</Link>
                    </li>
                    <li>
                    <Link to='/news'>News</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}
export default Navbar