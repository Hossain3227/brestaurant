import { createContext, useEffect, useState } from "react";
import { app } from "../components/firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Useaxiospublic from "../hooks/useaxiospublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const axiosPublic = Useaxiospublic();

const AuthProvider = ({children}) => {
    
    const [user,setuser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setuser(currentUser);
    //         console.log('current user', currentUser);
    //         setLoading(false);
    //     });
    //     return () => {
    //         return unsubscribe();
    //     }
    // }, [])
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const authinfo = {
           user,
           loading,
           createUser,
           setLoading,
            signIn,
            googleSignIn,
            logOut,
            updateUserProfile 
    }
    
    return (

        

        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;