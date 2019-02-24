import React, { Component } from 'react';
import './Content.css';
import moment from 'moment-with-locales-es6';
import Modal from 'react-bootstrap4-modal';



class Content extends Component {

    constructor() {
        super();
        this.state = {
            modal: false,
            data: {
                names: '', email: '', phone: '', booking_type: ''
            },
            bukingTypes: []
        }
        this.handleModal = this.handleModal.bind(this);
        this.handleBooking = this.handleBooking.bind(this);
        this.handleJuan = this.handleJuan.bind(this);
    }

    componentWillMount() {
        fetch('http://localhost:3000/bookingtype')
            .then((response) => {
                return response.json()
            })
            .then((bukingTypes) => {
                this.setState({ bukingTypes: bukingTypes })
            })
    }

    handleModal(stateModal) {
        this.setState({
            modal: stateModal
        });
    }

    handleBooking(e) {
        e.preventDefault();
        const { value, name } = e.target;
        this.setState({
            data: {
                [name]: value
            }
        });
        console.log(this.state.data);
        
        /*var url = 'http://localhost:3000/bookingtype';
        var data = {
            email_customer: 'juanfeorar',
            id_bokking_type: 1,
            name_curstomer: 'Juan Fernando',
            phone_customer: '3003355490'
        };
    
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    */
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

    handleJuan(e) {
        e.preventDefault();
        console.log(this.state);

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
                            <form onSubmit={this.handleJuan}>
                                <div className="form-group text-left">
                                    <label htmlFor="names" className="col-form-label">Nombres:*</label>
                                    <input type="text" className="form-control" id="names" name="names"
                                        onChange={this.handleBooking} placeholder="Ingresa tus nombres" />
                                </div>
                                <div className="form-group text-justify">
                                    <label htmlFor="email" className="col-form-label">Email:*</label>
                                    <input type="email" className="form-control" id="email" name="email"
                                        onChange={this.handleBooking} placeholder="Ingresa tu E-mail" />
                                </div>
                                <div className="form-group text-justify">
                                    <label htmlFor="phone" className="col-form-label">Teléfono:*</label>
                                    <input type="text" className="form-control" id="phone" name="phone"
                                        onChange={this.handleBooking} placeholder="Ejemplo: 3003354578" />
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="names" className="col-form-label">Tipo de reserva:*</label>
                                    <select className="form-control" onChange={this.handleBooking} name="booking_type">
                                        {this.state.bukingTypes.map((bukingType) =>
                                            <option value={`${bukingType.id_booking_type}`} key={bukingType.id_booking_type}>
                                                {bukingType.booking_type}
                                            </option>)}
                                    </select>
                                </div>
                                <button type="button" className="btn btn-secondary" onClick={() => this.handleModal(false)}>
                                    Cerrar
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    ¡Guardar y confirmar reserva!
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">


                        </div>
                    </div>
                </Modal>
            </div >
        );
    }
}

export default Content;