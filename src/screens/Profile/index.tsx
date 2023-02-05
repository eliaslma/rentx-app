import React from 'react';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

import {
    Container,
    Header,
    ProfileOptions,
    IconWrapper,
    Icon,
    Title,
    UserInfo,
    Photo,
    Name,
} from './styles';

export function Profile({ navigation }) {
    return (
        <Container>
            <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() + 30 }}>
                <ProfileOptions>
                    <IconWrapper>
                        <Icon name="edit-3" />
                    </IconWrapper>
                    <Title>Perfil</Title>
                    <IconWrapper onPress={() => { navigation.navigate('SignOut') }}>
                        <Icon name="power" />
                    </IconWrapper>
                </ProfileOptions>
            </Header>
            <UserInfo>
                <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/70176310?v=4' }} />
                <Name>Elias Lima da Silva</Name>
            </UserInfo>
        </Container>
    );
}