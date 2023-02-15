import React from 'react';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import { useAuth } from '@myapp/hooks/auth';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';

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

    const { user } = useAuth()
    const theme = useTheme()

    return (
        <Container>
            <StatusBar style={'light'} translucent={false} backgroundColor={theme.colors.header} />
            <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() + 30 }}>
                <ProfileOptions>
                    <IconWrapper onPress={() =>  navigation.navigate('EditProfile')}>
                        <Icon name="edit-3" />
                    </IconWrapper>
                    <Title>Perfil</Title>
                    <IconWrapper onPress={() => navigation.navigate('SignOut') }>
                        <Icon name="power" />
                    </IconWrapper>
                </ProfileOptions>
            </Header>
            <UserInfo>
                <Photo source={{ uri: user.avatar ? user.avatar : 'https://www.kuppingercole.com/pics//defperson.jpg' }} />
                <Name>{user.name}</Name>
            </UserInfo>
        </Container>
    );
}