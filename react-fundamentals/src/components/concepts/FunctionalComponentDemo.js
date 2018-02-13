import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const FunctionalComponentDemo = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Functional Component</h1>
                <p>Functional components allow you to render information to the web page without having to se or change state</p>
                <dl>
                    <dt>Presentational</dt>
                    <dd>Often used for simply rendering a small chunk of code to the dom.</dd>
                    <dt>No 'this' keyword</dt>
                    <dd>Unlike class components, function ones don't use this.</dd>
                    <dt>No state</dt>
                    <dd>These are 'dumb' components for UI.</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element.</dd>
                </dl>
                <h1>Challenge 2</h1>
                <NoArrow />
                <Arrow />
            </div>
        </div>
    )
}

const NoArrow = function () {
    return (
        <div className="main">
            <div className="mainDiv">
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">No Arrow Function</h1>
                        <p className="lead">This is was made not using an arrow function.</p>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}

const Arrow = ()=>
        <div className="main">
            <div className="mainDiv">
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3 arrow">Arrow Function</h1>
                        <p className="lead arrowlead">This is was made using an arrow function.</p>
                    </Container>
                </Jumbotron>
            </div>
        </div>


export default FunctionalComponentDemo