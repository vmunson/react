import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const Projects = [
    { title: 'Beast Creature', author: 'Adam Smith', codepenUrl: 'https://codepen.io/Adamws33/pen/KZQxwJ', date: '01/15/2018' },
    { title: 'Another Beast', author: 'Allison Summers', codepenUrl: 'https://codepen.io/alsummers/pen/vpjXOX', date: '01/15/2018' },
    { title: 'Beast Mode', author: 'Andres Martin', codepenUrl: 'https://codepen.io/dreMartin/pen/eyVLGN', date: '01/15/2018' },
    { title: 'Beasty', author: 'Andrew Gunst', codepenUrl: 'https://codepen.io/agunst99/pen/RxMYOM', date: '01/15/2018' },
]

export default class PropsDemo extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = { projects: Projects };
        console.log("State check:", this.state.projects)
    }
    render() {
        const works = this.state.projects.map((project, i) => {
            console.log("Project", project);
            console.log("Index", i);
            return (
                <div key={i}> 
                    <Title title={project.title} />
                    <Author author={project.author} />
                    <CodepenUrl codepenUrl={project.codepenUrl} />
                    <Footer date={project.date} />
                    <hr />
                </div>
            )
        })
   
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>List of Projects</h1>
                    <div>

                        {works}

                    </div>
                </div>
            </div>
        )
    }
}

class Title extends Component {
    constructor(props) {
        super(props)
        console.log("Title props:", props);
    }
    render() {
        return (
            <p> {this.props.title} </p>
        );
    }
}

class Author extends Component {
    constructor(props) {
        super(props)
        console.log("Author props:", props);
    }
    render() {
        return (
            <p>
                {this.props.author}
            </p>
        );
    }
}

class CodepenUrl extends React.Component {
    constructor(props) {
        super(props)
        console.log("Link props:", props);
    }
    render() {
        return (
            <p>
                {this.props.codepenUrl}
            </p>
        );
    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props)
        console.log("Date props:", props);
    }
    render() {
        return (
            <p>
                {this.props.date}
            </p>
        );
    }
}

PropsDemo.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    codepenUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}
PropsDemo.defaultProps = {
    title: "Hello Props",
    author: "Bob",
    codepenUrl: "https://codepen.io/",
    date: "12/9/90"
}