import React, { createContext, useEffect, useState} from "react";

// export type AuthContext = {
//   auth : Auth,
//   setAuth : (c: Auth | null | SetAuthCallback) => void,
//   persist : boolean,
//   setPersist : (c: boolean) => void
// }

const AuthContext = createContext({auth: null, setAuth: ()=>{}, persist : false, setPersist(c) {}});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null);
    const [persist, setPersist] = useState(localStorage.getItem('persist') === "true" || false);

    //TODO: move persist and set persist to custom hooks
    useEffect(
      ()=>{
        localStorage.setItem('persist', persist + '')
      }, [persist])
        
    return (
        <AuthContext.Provider value={{auth, setAuth, persist, setPersist}}>
          {children}
        </AuthContext.Provider>
    )
    
}

export default AuthContext