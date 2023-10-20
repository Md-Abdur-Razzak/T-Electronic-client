import React, {  createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firbase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const MyContext =createContext(null) 
const Authprovider = ({children}) => {
    const [users,setCurrentUser]=useState(null)
    const [brands,setBrands]=useState([])
    const [slider,setSlider]=useState([])
    const [lodder,setLodder]=useState(true)
    const creatEmilAndPassword = (email,password)=>{
        setLodder(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singWithEmailAndPassword = (email,password)=>{
        setLodder(true)
         return signInWithEmailAndPassword(auth,email,password)
    }
    const googleAthntocation = () =>{
        setLodder(true)
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
    }
    const githubAthntocation = () =>{
        setLodder(true)
                 const provider = new GithubAuthProvider()
                 return signInWithPopup(auth,provider)
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
    useEffect(()=>{
        fetch('https://tae-sever-side.vercel.app/brands')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])
    useEffect(()=>{
        fetch('/slider.json')
        .then(res=>res.json())
        .then(data=>setSlider(data))
    },[])

    const passingData = {
        users,
        creatEmilAndPassword,
        singWithEmailAndPassword,
        logOutUser,
        lodder,
        brands,
        slider,
        googleAthntocation,
        githubAthntocation,
    }
    return (
        <MyContext.Provider value={passingData}>
            {children}
        </MyContext.Provider>
    );
};

export default Authprovider;