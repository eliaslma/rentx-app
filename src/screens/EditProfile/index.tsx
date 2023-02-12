import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import { DefaultButton } from '@myapp/components/DefaultButton';
import Camera from '../../assets/camera.svg'
import { ChangePasswordForm } from '@myapp/components/ChangePasswordForm';
import { useAuth } from '@myapp/hooks/auth';
import { InputForm } from '@myapp/components/InputForm';
import Email from '../../assets/email.svg'
import Perfil from '../../assets/perfil.svg';
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
    FormWrapper
} from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
});

export function EditProfile({navigation}){

    const theme = useTheme()
    const [changeDataSelected, setChangeDataSelected] = useState<boolean>(true)
    const { user } = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    function handleSelectChangeData(){
        setChangeDataSelected(true)
    }

    function handleSelectChangePassword(){
        setChangeDataSelected(false)
    }

    return(
        <Container>
            <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() + 30 }}>
                <ProfileOptions>
                    <BackButton onPress={() => navigation.navigate('Profile')}>
                        <Icon name="keyboard-arrow-left" color={theme.colors.text}/>
                    </BackButton>
                    <Title>Editar Perfil</Title>
                </ProfileOptions>
            </Header>
            <UserInfo>
                <PhotoWrapper>
                    <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/70176310?v=4' }} />
                    <AddPhotoButton>
                        <Camera width={RFValue(24)} height={RFValue(24)}/>
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
                <FormWrapper>
                    {changeDataSelected ?
                        <>
                            <InputForm control={control}
                                name='name'
                                placeholder='Nome'
                                icon={Perfil}
                                error={errors.name}
                                defaultValue={user.name}
                            />
                            <InputForm control={control}
                                name='email'
                                placeholder='E-mail'
                                keyboardType={'email-address'}
                                icon={Email}
                                error={errors.email}
                                defaultValue={user.email}
                            />
                        </>
                        :
                        <ChangePasswordForm/>
                    }
                </FormWrapper>
                <DefaultButton title={'Salvar alterações'}/>
            </UserData>
        </Container>
    );
}