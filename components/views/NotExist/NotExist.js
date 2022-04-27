import React from 'react';
import { View } from 'react-native';
import { NotExistButtonText, NotExistContainer, NotExistGoBackButton, NotExistTitle } from './NotExist.styles';
import { useNavigation } from '@react-navigation/native';
import { DevLogo } from '../../atoms';

const NotExist = ({ navigation }) => {
    return (
        <NotExistContainer>
            <NotExistTitle>
                Страница временно не существует, но, скорее всего, появится в следующем обновлении!
            </NotExistTitle>
            <NotExistGoBackButton
                onPress={() => navigation.goBack()}
            >
                <NotExistButtonText>
                    Вернуться назад
                </NotExistButtonText>
            </NotExistGoBackButton>
            <DevLogo />
        </NotExistContainer>
    );
}


export default NotExist;
