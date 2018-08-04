import React from 'react';
import Aux from '../hoc/Auxiliary';
import Greating from './Greating';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      hour: this.checkTime()
    };
  }

  tick() {
    this.setState({ date: new Date() });
  }

  getHours() {
    return this.state.date.getHours();
  }
  getMinutes() {
    return this.state.date.getMinutes();
  }

  getSeconds() {
    return this.state.date.getSeconds();
  }

  checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    } // add zero in front of numbers < 10
    return i;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    // let Second = this.checkTime(this.getSeconds());
    let Minutes = this.checkTime(this.getMinutes());
    return (
      <Aux>
        <h1 id="time">
          <span className="hours">{this.getHours()}</span>
          <span>:</span>
          <span className="min">{Minutes}</span>
          {/* <span>:</span>
        <span className="sec">{Second}</span> */}
        </h1>
        <h3 className="greating">
          <Greating termtime={this.getHours()} />, <span id="nama">Nanda</span>
        </h3>
        <p id="today">TODAY</p>
      </Aux>
    );
  }
}
