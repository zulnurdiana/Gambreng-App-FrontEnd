import { createContext,  useState } from "react";

export const AlertContext = createContext({setAlert : (status,text)=>{}});

const TIMEOUT  = 3000;

const AlertProvider = ({
    className ="",
    classOnError = "bg-red-500 shadow-red-700",
    classOnSuccess = "bg-green-500 shadow-green-700",
    classOnWarning = "bg-yellow-500 shadow-yellow-700",
    overrideClass = false,
    children
})=>{
    const [_timeout, _setTimeout] = useState(null);
    const [text, setText] = useState('');
    const [display, setDisplay] = useState(false);
    const [status, setStatus] = useState('success');

    const setAlert = (status, text)=>{setStatus(status); setText(text); fireAlert()}
    
    const fireAlert = ()=>{
        setDisplay(false)
        if(_timeout)
            clearTimeout(_timeout);
        const newTimeout = setTimeout(()=>setDisplay(false), TIMEOUT);
        _setTimeout(newTimeout)

        setDisplay(true);
    }

    return <>
        {
            <div className={
                overrideClass ? className + ' ' : " text-white p-3 fixed z-20 top-4 left-1/2 -translate-x-1/2 transition transform shadow-lg rounded-md w-[90vw] md:w-auto " 
                + (status === 'success' ? classOnSuccess : '')
                + (status === 'warning' ? classOnWarning : '')
                + (status === 'error' ? classOnError : '') 
                + (!display ? ' translate-y-3 opacity-0' : '')
            }
                dangerouslySetInnerHTML={{__html: text}}
            />
        }
        <AlertContext.Provider value={{setAlert}}>
            {children}
        </AlertContext.Provider>
    </>
}

export default AlertProvider