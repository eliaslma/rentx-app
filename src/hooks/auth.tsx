import { 
    useContext,
    createContext,
    useState,
    ReactNode
} from "react";

import { useEffect } from "react";
import { api } from "@myapp/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

interface userData{
    avatar: string,
    driver_license?: string,
    email: string,
    id: string,
    name: string,
}

interface authState{
    token: string;
    user: userData;
}

interface SignCredentials{
    email: string;
    password: string;
}

interface AuthContextProps{
    user: userData
    signIn: (credentials: SignCredentials) => Promise<void>
    signOut(): Promise<void>;
    userStorageLoading: boolean;
}

interface AuthProviderProps{
    children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)


function AuthProvider({children} : AuthProviderProps){

    const [userStorageLoading,setUserStorageLoading] = useState(true);
    const [userAuthState, setUserAuthState] = useState<authState>({} as authState)
    const userStorageKey = '@rentx:user';

    async function signIn(userCredential: SignCredentials){

        await api.post('/sessions', {
            email: userCredential.email,
            password: userCredential.password
        }).then((response) => {
            const { user, token } = response.data;
            const userAuthenticad : authState = {
                token: token,
                user: user
            }
            api.defaults.headers.authorization = `Bearer ${token}`;
            setUserAuthState({ user, token })
            setLocalStorageAuthenticatedUserData(userAuthenticad)
        }).catch((error) => {
            throw Error(error)
        })

    }

    // persiste dados do usuário autenticado
    async function setLocalStorageAuthenticatedUserData(userAuthenticad: authState){

        try {
            await AsyncStorage.setItem(userStorageKey,JSON.stringify(userAuthenticad))
        }catch(e){
            console.log(e)
        }

    }

    async function getAuthenticatedUserData(){

            const userData = await AsyncStorage.getItem(userStorageKey) 
            if(userData){
                const userDataFormatted = JSON.parse(userData) as authState
                api.defaults.headers.authorization = `Bearer ${userDataFormatted.token}`;
                setUserAuthState(userDataFormatted)
            }
            setUserStorageLoading(false)
    }

    async function signOut(){
        try{
            setUserAuthState({} as authState)
            await AsyncStorage.removeItem(userStorageKey)
        }catch(e){
            console.log(e)
            Alert.alert('','Não foi possível deslogar')
        }
    }

    useEffect(() => {
        getAuthenticatedUserData(); 
    },[])

    return(
        <AuthContext.Provider value={{
            user: userAuthState.user,
            signIn,
            signOut,
            userStorageLoading
        }}>
            {children}
        </AuthContext.Provider>


    );
}

function useAuth(){
    const context = useContext(AuthContext)
    return context;
}

export {AuthProvider, useAuth}