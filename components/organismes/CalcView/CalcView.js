import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppContainer } from '../../atoms';
import { CalcViewTitle } from './CalcView.styles';

const CalcView = ({ content, collapsContent }) => {
    return (
        <AppContainer>
            <AppScrollContainer>
                <DevLogo />
                <CalcViewTitle>{content.title}</CalcViewTitle>
                <CollapsView collapsContent={collapsContent} />
            </AppScrollContainer>
        </AppContainer>
    );
}

const styles = StyleSheet.create({})

export default CalcView;
