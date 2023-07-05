import { FC, createContext, useCallback, useMemo, useState } from "react"
import { Props } from "../types/types";


export const AuthContext = createContext< {login: () => void, logout: () => void; isAuthenticated: boolean}>({login: () => {}, logout: () => {}, isAuthenticated: false});


export const AuthProvider: FC<Props> = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState <boolean> (
        localStorage.getItem('authAppZapas') === 'false'
    );

    const login = useCallback( () => {
        localStorage.setItem('authAppZapas', true.toString());
        setIsAuthenticated (true);
    }, []);

    const logout = useCallback( () => {
        localStorage.removeItem('authAppZapas');
        setIsAuthenticated (false);
    }, []);

    const authContextValue = useMemo ( () => ({
        login,
        logout,
        isAuthenticated
    }), [login, logout, isAuthenticated] );

return (
    <>
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    </>
);
};

export default AuthContext