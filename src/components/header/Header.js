import React from 'react'
import {Link, useHistory} from "react-router-dom"
import './header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    const history = useHistory();

    const login = () => {
        if (user) {
            history.push("/login")
        }
    }

    const user = localStorage.getItem("CURRENT_USERNAME")

    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
            </Link>
            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 links */}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
            </div>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                </div>
            </Link>
        </nav>
    )
}

export default Header

