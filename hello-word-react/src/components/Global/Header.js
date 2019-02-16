//Dependencies
import React, { Component } from 'react';

//Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {

    render() {
        const { title, items } = this.props;
        return (
            <div className="Header">
                <img src={logo} alt="logo" className="Logo" />
                <h2>{title} </h2>
                <ul className="Menu">
                    {items && items.map((item, key) =>
                        <li key={key}> {item.title} </li>
                    )}
                </ul>
            </div>
        )
    };
}

export default Header;