import React from 'react';
import TimerApp from './TimerApp';
import ClockApp from './ClockApp';
import ClockAppTwo from './ClockAppTwo';
import StopWatchApp from './StopWatchApp'


const TimePiecesApp = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <TimerApp />
                <hr />
                <ClockApp />
                <ClockAppTwo />
                <hr />
                <StopWatchApp />
            </div>
        </div>
    )
}

export default TimePiecesApp;