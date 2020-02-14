import React,{useState,createContext} from 'react';
export const Context = createContext();
export const ContextProvider = props => {
    const [isAuthenticated,setAuthentication] = useState(false);

    return (
        
        <Context.Provider value  = {[isAuthenticated,setAuthentication]}>
            {props.children}
        </Context.Provider>
    )
}
