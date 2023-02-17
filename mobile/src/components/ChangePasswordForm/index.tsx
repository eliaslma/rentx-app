import React from 'react';
import { useState } from 'react';
import { DefaultButton } from '../DefaultButton';
import Password from '../../assets/password.svg'
import { InputForm } from '../InputForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { ScrollView } from 'react-native';

import {
    Container,
} from './styles';


const schema = Yup.object().shape({
    currentPassword: Yup.string().required(),
    confirmationPassword: Yup.string().required(),
    newConfirmationPassword: Yup.string().required()
});

export function ChangePasswordForm(){

    const [hideButton, setHideButton] = useState<boolean>()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function handleHideButton(){
        setHideButton(!hideButton)
    }

    return(
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                
                    <InputForm control={control}
                        name='currentPassword'
                        placeholder='Senha atual'
                        icon={Password}
                        error={errors.currentPassword}
                        onFocus={handleHideButton}
                        onBlur={handleHideButton}
                        isPassword
                    />
                    <InputForm control={control}
                        name='confirmationPassword'
                        placeholder='Senha'
                        icon={Password}
                        error={errors.confirmationPassword}
                        onFocus={handleHideButton}
                        onBlur={handleHideButton}
                        isPassword
                    />
                    <InputForm control={control}
                        name='newConfirmationPassword'
                        placeholder='Repetir senha'
                        icon={Password}
                        error={errors.newConfirmationPassword}
                        onFocus={handleHideButton}
                        onBlur={handleHideButton}
                        isPassword
                    />
                
            </ScrollView>
            {!hideButton && <DefaultButton title='Salvar alterações'/>}
        </Container>
    );
}