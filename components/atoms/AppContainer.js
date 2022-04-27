import React from 'react';
import { View, Dimensions } from 'react-native';
import styled from 'styled-components/native';


const AppContainer = ({ props, children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

const Container = styled.View`
    height: 100%;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 7%;
    background-color: #fff;
`


export default AppContainer;
