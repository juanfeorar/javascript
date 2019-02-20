import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
                <div className="container-fluid">
                    {/* <div class="row"> */}
                    <img src="https://app.j4pro.com/j4pro_erp/site_media/adminlte/logo-j4pro-mini.svg" alt="Soporte j4Pro"
                        width="10%" height="10%" className="navbar-brand" />
                    <h5 className="text-light">Agenda Demos y soporte j4Pro</h5>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="form-inline my-2 my-lg-0 ">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>



            </nav>
        );
    }
}

export default Header;