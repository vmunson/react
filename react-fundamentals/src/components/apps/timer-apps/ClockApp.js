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
        const date = new Date(Date.now()).toLocaleTimeString();
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
                <h1 className="section-title">React Clock</h1>
                <hr className="explanation" />
                <p>{this.state.time}</p>
                <p>Indianapolis, IN</p>
                
            </div>
        );
    }
}