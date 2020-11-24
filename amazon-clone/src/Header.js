import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShopingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return( 
        <nav className="header">
            {/* Sidenav */}
            {/* Logo */}
            <Link to="/">
                <img classname="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>
            {/* Search Box*/}
            <div className="header_search">
                <input type="text" className="header_searchbar"/>
                <SearchIcon className="header_searchicon" />
            </div>
            {/* Lang Flag */}
            {/* 3 Links */}
            {/* Need to Put in Little Triangle Under the Links to Open Up More Opitions */}
            <div className="header_nav">
                {/* 1st Link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_option_lineone">Hello, Sign In</span>
                        <span className="header_option_linetwo">Account & Lists</span>
                    </div>
                </Link>
                {/* 2nd Link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_option_lineone">Returns</span>
                        <span className="header_option_linetwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd Link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_option_lineone"> &nbsp; </span>
                        <span className="header_option_linetwo">Try Prime</span>
                    </div>
                </Link>
                {/*Basket Icon with Number of Items */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionbasket">
                        {/* Shopping Basket Icon */}
                        <ShopingBasketIcon />
                        {/* Number of Items in Basket */}
                        <span className="header_option_linetwo header_basketcount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
    
}

export default Header
