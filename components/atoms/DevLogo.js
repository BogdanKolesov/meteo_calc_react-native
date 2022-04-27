import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const DevLogo = () => {
    return (
        <Logo>
            created by Kolesov.dev
        </Logo>
    );
}

const Logo = styled.Text`
padding-top: 5px;
    font-size: 14px;
    letter-spacing: 1px;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    font-family: Roboto_100Thin;
    text-align: right;
`


export default DevLogo;
