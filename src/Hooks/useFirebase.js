import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, FacebookAuthProvider, getIdToken } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleSignIn = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('')
                saveUser(user.email, user.displayName, 'PUT');
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const facebookSignIn = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('');
                saveUser(user.email, user.displayName, 'PUT');
            })
            .catch((error) => {
                // Handle Errors here.
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const userRegistration = (email, password, name, location, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('');
                // Signed in 
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user
                saveUser(email, name, 'POST');
                // update profile
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                // Signed in 
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setError('');
        }).catch((error) => {
            setError(error.message);
        })
            .finally(() => setIsLoading(false));
    };

    // observe user state
    useEffect(() => {
        const userState = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => setToken(idToken))
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => userState;
    }, [auth]);

    //make secure for admin
    useEffect(() => {
        fetch(`https://frozen-falls-89510.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email]);

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://frozen-falls-89510.herokuapp.com/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return {
        user, admin, token, userRegistration, loginUser, logOut, isLoading, error, googleSignIn, facebookSignIn, saveUser
    }
};

export default useFirebase;