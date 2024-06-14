import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { auth } from "../Config/Config";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ({user}) => {

    const navigate = useNavigate();

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            navigate('/Login');
        })
    }

    return (
        <div className='navbar'>
            <div className='leftside'>
                <div className='logo'>
                <a href="/">
                    <img src={logo} alt="logo" />
                    </a>
                </div>
            </div>
            <div className='rightside'>

                {!user&&<>
                    <div><Link className='navlink' to="/Signup">SIGN UP</Link></div>
                    <div><Link className='navlink' to="/login">LOGIN</Link></div>
                </>} 

                {user&&<>
                    <div><Link className='navlink' to="/">{user}</Link></div>
                    <div><Link className='navlink' to="/AddProducts">Add Products</Link></div>
                    <div className='cart-menu-btn'>
                        <Link className='navlink' to="/Cart">
                            <Icon icon={shoppingCart} size={20}/>
                        </Link>
                    </div>
                    <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>LOGOUT</div>
                </>}                               
            </div>
        </div>

    )
}