import React, { Component } from "react";
import moment from "moment/min/moment-with-locales.min";

export default class Home extends Component {
  state = {
    birth_date: [2019, 8, 29, 8, 47, 0],
    birth_date_f: moment([2019, 8, 29, 8, 47, 0])
      .locale("es")
      .format("LL h:mm a"),
    charge: moment().format("h:mm:ss a"),
    now: moment().format("h:mm:ss a"),
    time_elapsed_from_charge: null,
    time_elapsed_from_birth_date: null
  };

  chargedToNow = () => {
    const charge = this.state.charge;
    this.setState({
      time_elapsed_from_charge: moment(charge, "h:mm:ss a")
        .locale("es")
        .fromNow()
    });
  };

  reloadToNow = () => {
    this.setState({
      now: moment().format("h:mm:ss a")
    });
  };

  birthDateToNow = () => {
    let birth_date = moment(this.state.birth_date);
    const now = moment();
    let years = now.diff(birth_date, "years");
    birth_date.add(years, "years");
    let days = now.diff(birth_date, "days");
    birth_date.add(days, "days");
    let hours = now.diff(birth_date, "hours");
    birth_date.add(hours, "hours");
    let minutes = now.diff(birth_date, "minutes");
    birth_date.add(minutes, "minutes");
    let seconds = now.diff(birth_date, "seconds");
    let s_years = " años ";
    let s_days = " días ";
    let s_hours = " horas ";
    let s_minutes = " minutos ";
    let s_seconds = " segundos ";
    if (years === 1) {
      s_years = " año ";
    }
    if (days === 1) {
      s_days = " dia ";
    }
    if (hours === 1) {
      s_hours = " hora ";
    }
    if (minutes === 1) {
      s_minutes = " minuto ";
    }
    if (seconds === 1) {
      s_seconds = " segundo";
    }
    this.setState({
      time_elapsed_from_birth_date:
        years +
        s_years +
        days +
        s_days +
        hours +
        s_hours +
        minutes +
        s_minutes +
        seconds +
        s_seconds
    });
  };

  componentDidMount() {
    setInterval(this.reloadToNow, 1000);
    setInterval(this.chargedToNow, 1000);
    setInterval(this.birthDateToNow, 1000);
  }
  render() {
    return (
      <React.Fragment>
        <h1> Hora actual: </h1>
        <h2> {this.state.now}</h2>
        <h1> Hora de carga: </h1>
        <h2> {this.state.charge}</h2>
        <h1> Ultima carga: </h1>
        <h2> {this.state.time_elapsed_from_charge} </h2>
        <h2>
          -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        </h2>
        <h1> Fecha de nacimiento: </h1>
        <h2>{this.state.birth_date_f}</h2>
        <h1> Tiempo relativo: </h1>
        <h2> {this.state.time_elapsed_from_birth_date}</h2>
      </React.Fragment>
    );
  }
}
