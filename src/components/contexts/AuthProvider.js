import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../components/firebase/firebase.config'

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])

    const userSignin = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const facebookSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }
    const logOut = () => {
        // localStorage.removeItem("geniusToken");
        signOut(auth)
    }
  
    const authInfo = {
        user,
        loading,
        createUser,
        userSignin,
        googleSignin,
        facebookSignin,
        setLoading,
        logOut
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;