import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = ({ cartLength }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">LOGO</NavLink>
                <div className="mx-auto">
                    <ul className="navbar-nav">

                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Devices</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Delivery & Payment</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Guarantee</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>

                    </ul>
                </div>

                <ul className="navbar-nav">
                    <li className="nav-item ml-auto">
                        <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                            aria-hidden="true" />Cart {cartLength ? `(${cartLength})` : ''}</NavLink>
                    </li>

                    <li className="nav-item signIn py-0" style={{ border: '1px solid gray', borderRadius:'25px'}}>
                        <a className="nav-link" href="#">SIGN IN</a>
                    </li>
                </ul>

            </div>
        </nav>


    );
};


const mapStateToProps = (state) => {
    return {
        cartLength: state.shop.cart.length
    }
};

export default connect(mapStateToProps, null)(Header);



