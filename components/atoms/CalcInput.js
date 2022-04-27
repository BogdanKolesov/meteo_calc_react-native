import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const CalcInput = ({ onChangeText, value }) => {
    return (
        <Input
            keyboardType='numeric'
            onChangeText={onChangeText}
            value={value}>

        </Input>
    );
}

const Input = styled.TextInput`
    font-size: 16px;
    padding: 5px;
    width: 20%;
    border-color: #000;
    border-width: 1px;
`

export default CalcInput;
