import { 
    useContext,
    createContext,
    useState,
    ReactNode
} from "react";

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
}

interface AuthProviderProps{
    children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)


function AuthProvider({children} : AuthProviderProps){

    const [userAuthState, setUserAuthState] = useState<authState>({} as authState)

    async function signIn(userCredential: SignCredentials){
        await api.post('/sessions', {
            email: userCredential.email,
            password: userCredential.password
        }).then((response) => {
            const { user, token } = response.data;
            api.defaults.headers.authorization = `Bearer ${token}`;
            setUserAuthState({ user, token })
        }).catch((error) => {
            throw Error(error)
        })
    }

    return(
        <AuthContext.Provider value={{
            user: userAuthState.user,
            signIn
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