import React, {  createContext, useContext } from 'react';
import { auth } from '../firbase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export const MyContext =createContext(null) 
const Authprovider = ({children}) => {

    const creatEmilAndPassword = (email,password)=>{
       
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singWithEmailAndPassword = (email,password)=>{
          
         return signInWithEmailAndPassword(auth,email,password)
    }



    const passingData = {
        creatEmilAndPassword,
        singWithEmailAndPassword
    }
    return (
        <MyContext.Provider value={passingData}>
            {children}
        </MyContext.Provider>
    );
};

export default Authprovider;