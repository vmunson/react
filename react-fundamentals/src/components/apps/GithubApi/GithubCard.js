import React from 'react';
import styled from 'styled-components'

const GithubCard = (props) => {
    return (
        <div className="main">
            <div className="mainDiv">
            <Card>
                <img width="75" src={props.avatar_url} alt="card"/>
                <div style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
                        {props.name}
                    </div>
                    <div>{props.company}</div>
                    <div>{props.url}</div>
                    <div>{props.location}</div>
                </div>
            </Card>    
            </div>
        </div>
    );
};
const Card = styled.div`
    width: 50%;
    padding: 5px;
    background: lightblue;
`

export default GithubCard