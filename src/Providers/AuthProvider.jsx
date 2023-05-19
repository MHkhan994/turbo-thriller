import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)


    // sing up with email pass
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in wiht email pass
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // logout function
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)
        })
    }, [])


    const authInfo = {
        signUp,
        googleSignIn,
        logOut,
        logIn,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;