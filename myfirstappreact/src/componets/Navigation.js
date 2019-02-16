import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <a href="https://www.j4pro.com" className="text-white">
                   { this.props.title } Tasks { this.props.ntaks }
                   <span className="badge badge-pill badge-light ml-2"></span>
                </a>
            </nav>
        )
    }
}

export default Navigation;