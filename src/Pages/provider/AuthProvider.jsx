import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';

export const AuthContext = createContext(); 



const AuthProvider = ({children}) => {

        const [user, setUser]= useState(null);
        const [loading , setLoading] = useState(true);

        const createUserWithEmail = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
        };
        
        const signInWithGoogle = (googleProvider)=>{
          return signInWithPopup(auth , googleProvider)
        };

        const signInUserWithEmailAndPassword = (email, password)=>{
          return signInWithEmailAndPassword( auth, email, password)
        };

        const signOutUser = ()=>{
          return signOut(auth)
        };
        const upDateUserProfile = (upDateData )=>{
          return updateProfile(auth.currentUser, upDateData)
        }

         useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => { 
      unSubscribe();
    };
  }, []);


    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUserWithEmail,
        signInWithGoogle,
        signOutUser,
        signInUserWithEmailAndPassword,
        upDateUserProfile,

    };

    return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
        
    
};

export default AuthProvider;