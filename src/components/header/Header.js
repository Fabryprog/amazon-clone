import React from 'react'
import {Link, useHistory} from "react-router-dom"
import './header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue } from "../stateProvider/StateProvider"

function Header() {
    const [{basket}] = useStateValue();
    const history = useHistory();
    console.log(basket);

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
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
            </div>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* shopping basket icon */}
                    <ShoppingBasketIcon/>
                    {/* number of items in the basket */}
                    {/* we use {basket?.length} to render the length of the basket when basket property of the state reaches the header component. without this, the dom will render the basket.length even when it has not reach the header component therby resulting to an error  */}
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
            {/* basket icon with number*/}
        </nav>
    )
}

export default Header

