import React, {  createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firbase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const MyContext =createContext(null) 
const Authprovider = ({children}) => {
    const [users,setCurrentUser]=useState(null)
    const [lodder,setLodder]=useState(true)
    const creatEmilAndPassword = (email,password)=>{
        setLodder(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singWithEmailAndPassword = (email,password)=>{
        setLodder(true)
         return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect (()=>{
        const unsubcribe= onAuthStateChanged(auth,(user)=>{
          
          setCurrentUser(user)
          setLodder(false)
        
          
        })
        return ()=>{
            unsubcribe ()
        }
    },[])

    const logOutUser = ()=>{

        return signOut(auth)
    }
    const passingData = {
        users,
        creatEmilAndPassword,
        singWithEmailAndPassword,
        logOutUser,
        lodder
    }
    return (
        <MyContext.Provider value={passingData}>
            {children}
        </MyContext.Provider>
    );
};

export default Authprovider;