import React, { Component } from 'react';
import { Form } from './Form';
import styled from 'styled-components'

export default class MovieApp extends Component {
    render() {
        return (
            <Wrapper className="main">
                <div className="mainDiv">
                    <Form />
                </div>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
  background: #dbdbdb;
`;