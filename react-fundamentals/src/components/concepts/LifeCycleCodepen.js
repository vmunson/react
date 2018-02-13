import React from 'react'
import Iframe from 'react-iframe'

const LifeCycleCodepen = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Life Cycle Diagram</h1>
                <Iframe url="https://codepen.io/eduardoboucas/pen/jqWbdb"
                    width="850px"
                    height="1000px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen />
            </div>
        </div>
    )
}
export default LifeCycleCodepen