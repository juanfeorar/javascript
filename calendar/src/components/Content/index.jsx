import React, { Component } from 'react';
import './Content.css';
import moment from 'moment-with-locales-es6';
import Modal from 'react-bootstrap4-modal';



class Content extends Component {

    constructor() {
        super();
        this.state = {
            modal: false
        }
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal(state) {
        this.setState({
            modal: state
        });
    }

    handleBooking() {
        alert('');
    }

    handleCalendar = () => {
        moment.locale('es');
        const week = [];
        //const startOfWeek = moment().startOf('week');
        const endOfWeek = moment().endOf('week');

        let day = moment();
        while (day <= endOfWeek) {
            const weekDay = [];
            for (let i = 8; i < 18; i++) {
                weekDay.push(
                    <div className="card w-70 gridDay" onClick={() => this.handleModal(true)} key={i}>
                        {`${moment().hour(i).format("hh")} ${moment().hour(i).format("A")}`}
                    </div>
                );
            }
            week.push(
                <div className="col-sm" key={day}>
                    <div className="border-right">
                        {day.format('ddd').toString()}
                        <br />
                        {day.format('D-M-Y').toString()}
                    </div>
                    {weekDay}
                </div>

            );
            day = day.clone().add(1, 'd');
        }
        return week;
        //https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.handleCalendar()}
                </div>

                <Modal visible={this.state.modal} onClickBackdrop={this.modalBackdropClicked}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center">Reunión para el 23 de Frebrero de 2019</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group text-left">
                                    <label htmlFor="names" className="col-form-label">Nombres:*</label>
                                    <input type="text" className="form-control" id="names" name="names" placeholder="Ingresa tus nombres" />
                                </div>
                                <div className="form-group text-justify">
                                    <label htmlFor="email" className="col-form-label">Email:*</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Ingresa tu E-mail" />
                                </div>
                                <div className="form-group text-justify">
                                    <label htmlFor="phone" className="col-form-label">Teléfono:*</label>
                                    <input type="text" className="form-control" id="phone" name="phone" placeholder="Ejemplo: 3003354578" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-secondary" onClick={() => this.handleModal(false)}>
                                Cerrar
                        </button>
                            <button type="button" className="btn btn-primary">
                                ¡Guardar y confirmar reserva!
                        </button>
                        </div>
                    </div>


                </Modal>
            </div >
        );
    }
}

export default Content;