import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <p > {this.props.copyright} </p>
            </div>
        )
    }
}

export default Footer;