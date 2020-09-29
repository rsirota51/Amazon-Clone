import React from "react";
import './LowerHeader.css';
import { Link } from 'react-router-dom';

function LowerHeader() {
    return (
        <nav className="lowerheader">
            {/* Location Logo */}
            {/* First Link */}
            {/* Department Links */}
            <div className="lowerheader_nav">
                <Link to="/" className="lowerheader_link">
                    <div className="lowerheader_option">
                        <span className="lowerheader_primeline">Best Sellers</span>
                    </div>
                </Link>
                <Link to="/" className="lowerheader_link">
                    <div className="lowerheader_option">
                        <span className="lowerheader_primeline">Prime</span>
                    </div>
                </Link>
                <Link to="/" className="lowerheader_link">
                    <div className="lowerheader_option">
                        <span className="lowerheader_primeline">Customer Service</span>
                    </div>
                </Link>
                <Link to="/" className="lowerheader_link">
                    <div className="lowerheader_option">
                        <span className="lowerheader_primeline">New Releases</span>
                    </div>
                </Link>
                <Link to="/" className="lowerheader_link">
                    <div className="lowerheader_option">
                        <span className="lowerheader_primeline">Today's Deals</span>
                    </div>
                </Link>
                <Link to="/" className="lowerheader_link">
                    <div className="lowerheader_option">
                        <span className="lowerheader_primeline">Find a Gift</span>
                    </div>
                </Link>
                <Link to="/" className="lowerheader_link">
                    <div className="lowerheader_option">
                        <span className="lowerheader_primeline">Whole Foods</span>
                    </div>
                </Link>
                <Link to="/" className="lowerheader_link">
                    <div className="lowerheader_option">
                        <span className="lowerheader_primeline">Books</span>
                    </div>
                </Link>
                <Link to="/" className="lowerheader_link">
                    <div className="lowerheader_option">
                        <span className="lowerheader_primeline">Kindle Books</span>
                    </div>
                </Link>
                <Link to="/" className="lowerheader_link">
                    <div className="lowerheader_option">
                        <span className="lowerheader_primeline">Gift Cards</span>
                    </div>
                </Link>
                {/* To Do: Find Way to Add More Links as Page Expands */}
            </div>
            {/* Refresh Link */}
        </nav>
    );
}

export default LowerHeader