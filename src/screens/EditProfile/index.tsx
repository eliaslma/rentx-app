import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';
import * as ImagePicker from 'expo-image-picker';

import { UserDataForm } from '@myapp/components/UserDataForm';
import Camera from '../../assets/camera.svg'
import { ChangePasswordForm } from '@myapp/components/ChangePasswordForm';
import { useAuth } from '@myapp/hooks/auth';
import {
    Container,
    Header,
    ProfileOptions,
    Title,
    BackButton,
    Icon,
    UserInfo,
    Photo,
    PhotoWrapper,
    AddPhotoButton,
    Menu,
    ChangeData,
    OptionTitle,
    ChangePassword,
    UserData,
} from './styles';

export function EditProfile({ navigation }) {

    const theme = useTheme()
    const { user, updateUserData } = useAuth();
    const [changeDataSelected, setChangeDataSelected] = useState<boolean>(true)
    const [image, setImage] = useState(user.avatar);

    function handleSelectChangeData() {
        setChangeDataSelected(true)
    }

    function handleSelectChangePassword() {
        setChangeDataSelected(false)
    }

    async function handleChangePhoto() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        })

        if (!result.canceled) {
            updateUserData(undefined, result.assets[0].uri)
            setImage(result.assets[0].uri);
        }

    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Container>
                    <StatusBar style={'light'} translucent={false} backgroundColor={theme.colors.header} />
                    <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() + 30 }}>
                        <ProfileOptions>
                            <BackButton onPress={() => navigation.goBack()}>
                                <Icon name="keyboard-arrow-left" color={theme.colors.text} />
                            </BackButton>
                            <Title>Editar Perfil</Title>
                        </ProfileOptions>
                    </Header>
                    <UserInfo>
                        <PhotoWrapper>
                            <Photo source={{ uri: image ? image : 'https://www.kuppingercole.com/pics//defperson.jpg' }} />
                            <AddPhotoButton onPress={handleChangePhoto}>
                                <Camera width={RFValue(24)} height={RFValue(24)} />
                            </AddPhotoButton>
                        </PhotoWrapper>
                        <Menu>
                            <ChangeData isSelected={changeDataSelected} onPress={handleSelectChangeData}>
                                <OptionTitle isSelected={changeDataSelected}>Dados</OptionTitle>
                            </ChangeData>
                            <ChangePassword isSelected={!changeDataSelected} onPress={handleSelectChangePassword}>
                                <OptionTitle isSelected={!changeDataSelected}>Trocar senha</OptionTitle>
                            </ChangePassword>
                        </Menu>
                    </UserInfo>
                    <UserData>
                        {changeDataSelected
                            ? <UserDataForm />
                            : <ChangePasswordForm />
                        }
                    </UserData>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}