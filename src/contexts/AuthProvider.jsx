import React, { createContext, useEffect, useState} from "react";

// export type AuthContext = {
//   auth : Auth,
//   setAuth : (c: Auth | null | SetAuthCallback) => void,
//   persist : boolean,
//   setPersist : (c: boolean) => void
// }

const AuthContext = createContext({auth: null, setAuth: ()=>{}, accessToken : '', setAccessToken(c) {}});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null);
    const [accessToken, setAccessToken] = useState(localStorage.getItem('AT') || '');

    //TODO: move persist and set persist to custom hooks
    useEffect(
      ()=>{
        localStorage.setItem('AT', accessToken + '')
      }, [accessToken])
        
    return (
        <AuthContext.Provider value={{auth, setAuth, accessToken, setAccessToken}}>
          {children}
        </AuthContext.Provider>
    )
    
}

export default AuthContext