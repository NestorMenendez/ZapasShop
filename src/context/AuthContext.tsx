import { FC, createContext, useCallback, useMemo, useState } from "react"
import { Props } from "../types/types";


export const AuthContext = createContext< {login: (user: string) => void, logout: () => void; isAuthenticated: boolean; userLogged: string}>({login: () => {}, logout: () => {}, isAuthenticated: false, userLogged: ''});


export const AuthProvider: FC<Props> = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState <boolean> (
        localStorage.getItem('authAppZapas') === 'false'
    );
    const [userLogged, setUserLogged] = useState <string> ('');

    const login = useCallback( (user: string) => {
        localStorage.setItem('authAppZapas', true.toString());
        setIsAuthenticated (true);
        setUserLogged (user);
    }, []);

    const logout = useCallback( () => {
        localStorage.removeItem('authAppZapas');
        setIsAuthenticated (false);
        setUserLogged ('');
    }, []);

    const authContextValue = useMemo ( () => ({
        login,
        logout,
        isAuthenticated,
        userLogged
    }), [login, logout, isAuthenticated, userLogged] );

return (
    <>
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    </>
);
};

export default AuthContext