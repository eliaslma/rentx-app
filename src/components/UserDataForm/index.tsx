import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useAuth } from '@myapp/hooks/auth';
import { Alert } from 'react-native';

import { DefaultButton } from '../DefaultButton';
import { InputForm } from '@myapp/components/InputForm';
import Email from '../../assets/email.svg'
import Perfil from '../../assets/perfil.svg';
import {
    Container,
} from './styles';


const schema = Yup.object().shape({
    name: Yup.string().required(),
});

export function UserDataForm() {

    const [hideButton, setHideButton] = useState<boolean>()
    const { user, updateUserData } = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function handleHideButton() {
        setHideButton(!hideButton)
    }

    async function handleProfileUpdate({ name }) {
        try {
            await updateUserData(name)
            Alert.alert('', 'Perfil atualizado!')
        } catch (error) {
            Alert.alert('', 'Não foi possível atualizar o perfil')
            console.log(error)
        }

    }

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <InputForm control={control}
                    name='name'
                    placeholder='Nome'
                    icon={Perfil}
                    error={errors.name}
                    defaultValue={user.name}
                    onFocus={handleHideButton}
                    onBlur={handleHideButton}
                />
                <InputForm control={control}
                    name='email'
                    placeholder='E-mail'
                    keyboardType={'email-address'}
                    icon={Email}
                    defaultValue={user.email}
                    editable={false}
                />
            </ScrollView>
            {!hideButton && <DefaultButton title='Salvar alterações' onPress={handleSubmit(handleProfileUpdate)} />}
        </Container>
    );
}