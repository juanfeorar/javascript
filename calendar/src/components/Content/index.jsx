import React, { Component } from 'react';
import './Content.css';
//import moment from 'moment';
import moment from 'moment-with-locales-es6';



class Content extends Component {


    createCalendar = () => {
        moment.locale('es');
        let week = [];
        var startOfWeek = moment().startOf('week');
        var endOfWeek = moment().endOf('week');

        var day = startOfWeek;
        while (day <= endOfWeek) {
            let weekDay = [];
            for (let i = 8; i < 18; i++) {
                weekDay.push(
                    <div className="card w-70">
                    {i+moment(i).hour(i).format("A")}
                    </div>
                );
            }
            week.push(
                <div className="col-sm" key={day}>
                    <div className="border-right">
                        {day.format('ddd').toString()}
                        <br/>
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
        console.log(this.createCalendar());
        return (
            <div className="container">
                <div className="row">
                    {this.createCalendar()}
                </div>

            </div >
        );
    }
}

export default Content;