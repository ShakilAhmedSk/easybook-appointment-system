import React,{createContext,useContext,useState} from 'react'

const AuthContext = createContext();

const  AuthProvider = ({children}) =>{
    const [isLoggedIn,setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);

    return(
        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext)