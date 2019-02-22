import React, { Component } from 'react';
import './Content.css';
import moment from 'moment-with-locales-es6';



class Content extends Component {


    handleBooking() {
        alert('');
    }
    
    handleCalendar = () => {
        moment.locale('es');
        const week = [];
        const startOfWeek = moment().startOf('week');
        const endOfWeek = moment().endOf('week');

        let day = moment();
        while (day <= endOfWeek) {
            const weekDay = [];
            for (let i = 8; i < 18; i++) {
                weekDay.push(
                    <div className="card w-70 gridDay" onClick={this.handleBooking}>
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

            </div >
        );
    }
}

export default Content;