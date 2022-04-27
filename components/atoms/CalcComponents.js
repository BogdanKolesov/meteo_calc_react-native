import { View, Text } from 'react-native'
import styled from 'styled-components/native';


export const CalcContainer = styled.View`
    width: 100%;
    margin-top: 15px;
`

export const CalcItem = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`

export const CalcTextContainer = styled.View`
    flex-wrap: wrap;
    width: 60%;
`

export const CalcText = styled.Text`
    font-size: ${({ result }) => result ? '20px' : '16px'};
    color: #000;
    letter-spacing: 1.1px;
    padding-left: 10px;
    flex-wrap: wrap;

`