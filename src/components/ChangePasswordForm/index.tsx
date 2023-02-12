import React from 'react';

import Password from '../../assets/password.svg'
import { InputForm } from '../InputForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import {
    Container
} from './styles';

const schema = Yup.object().shape({
    currentPassword: Yup.string().required(),
    confirmationPassword: Yup.string().required(),
    newConfirmationPassword: Yup.string().required()
});

export function ChangePasswordForm(){

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    return(
        <Container>
            <InputForm control={control}
                name='currentPassword'
                placeholder='Senha atual'
                icon={Password}
                error={errors.currentPassword}
                isPassword
            />
            <InputForm control={control}
                name='confirmationPassword'
                placeholder='Senha'
                icon={Password}
                error={errors.confirmationPassword}
                isPassword
            />
            <InputForm control={control}
                name='newConfirmationPassword'
                placeholder='Repetir senha'
                icon={Password}
                error={errors.newConfirmationPassword}
                isPassword
            />
        </Container>
    );
}