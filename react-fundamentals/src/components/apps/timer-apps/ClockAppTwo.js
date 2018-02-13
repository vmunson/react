import React, { Component } from 'react';

export default class ClockApp extends Component {
    constructor(props) {
        super(props);
        var date = this.getTimeString();
        this.state = {
            time: date
        }
    }
    getTimeString() {
        const date = new Date().toLocaleTimeString("en-US", {timeZone: "Europe/London"})
        return date;
    }
    componentDidMount() {
        const _this = this;
        this.timer = setInterval(function () {
            var date = _this.getTimeString();
            _this.setState({
                time: date
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                <p>{this.state.time}</p>
                <p>London, UK</p>
                
            </div>
        );
    }
}