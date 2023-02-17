import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { MotiView } from 'moti';


import Logo from '../../assets/logo.svg'
import Brand from '../../assets/brand.svg'
import { Container } from './styles';
import { useAuth } from '@myapp/hooks/auth';

export function Splash({ navigation }) {

    const [firstLoaded, setFirstLoaded] = useState<boolean>()
    const { user } = useAuth()

    function startApp() {
        const nextScreen = user ? 'Home' : 'OnboardFirstStep';
        navigation.navigate(nextScreen);
    }

    return (
        <Container>
            {firstLoaded ?
                <MotiView
                    style={{ position: 'absolute' }}
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        type: 'timing', duration: 1500, repeat: 2, repeatReverse: true
                    }}
                    onDidAnimate={(opacity, finished, value) => { !value && startApp() }}
                >
                    <Logo width={RFValue(180)} height={RFValue(20)} />
                </MotiView>
                :
                <MotiView
                    style={{ position: 'absolute' }}
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        type: 'timing', duration: 1500, repeat: 2, repeatReverse: true
                    }}
                    onDidAnimate={(opacity, finished, value) => { !value && setFirstLoaded(true) }}
                >
                    <Brand width={RFValue(80)} height={RFValue(50)} />
                </MotiView>
            }
        </Container>
    );
}

