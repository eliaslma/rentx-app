import { 
    useContext,
    createContext,
    useState,
    ReactNode
} from "react";

import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "@myapp/services/api";

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
    userStorageLoading: boolean;
}

interface AuthProviderProps{
    children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)


function AuthProvider({children} : AuthProviderProps){

    const [userStorageLoading,setUserStorageLoading] = useState(true);
    const [userAuthState, setUserAuthState] = useState<authState>({} as authState)
    const userStorageKey = '@gofinances:user';

    async function signIn(userCredential: SignCredentials){
        await api.post('/sessions', {
            email: userCredential.email,
            password: userCredential.password
        }).then((response) => {
            const { user, token } = response.data;
            const userAuthenticade : authState = {
                token: token,
                user: user
            }
            api.defaults.headers.authorization = `Bearer ${token}`;
            setUserAuthState({ user, token })
            setAuthenticatedUserData(userAuthenticade)
        }).catch((error) => {
            throw Error(error)
        })
    }

    async function setAuthenticatedUserData(userAuthenticad: authState){
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

    useEffect(() => {
        getAuthenticatedUserData(); 
    },[])

    return(
        <AuthContext.Provider value={{
            user: userAuthState.user,
            signIn,
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