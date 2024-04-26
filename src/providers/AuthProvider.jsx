
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { app } from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import Login from "../Pages/Login";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider()

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    };

    // Social media sign in 

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }
    const gitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=> {
            unSubscribe();
        }
    },[])
    

    const authInfo = {
        createUser,
        user,
        loading,
        logOut,
        logIn,
        googleSignIn,
        gitHubSignIn,
        setLoading
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;