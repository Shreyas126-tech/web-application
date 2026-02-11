import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithPhoneNumber, signOut, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase only if keys are present to avoid crash on initial load
let app;
let auth;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
} catch (error) {
    console.warn("Firebase not initialized. Check .env variables.");
}

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return;
        }
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const login = async (phone, otp) => {
        if (!auth) {
            // Mock Login for Demo
            if (otp === '123456') { // Simple mock validation
                const mockUser = { uid: 'demo-user', phoneNumber: phone, displayName: 'Demo Admin' };
                setCurrentUser(mockUser);
                return Promise.resolve(mockUser);
            } else {
                return Promise.reject(new Error("Invalid Mock OTP (Use 123456)"));
            }
        }
        // Real Firebase Login would go here
        return Promise.reject(new Error("Real Firebase Login requires full implementation."));
    };

    const logout = () => {
        if (auth) return signOut(auth);
        setCurrentUser(null);
        return Promise.resolve();
    };

    const value = {
        currentUser,
        login,
        logout,
        auth // exposing auth for direct usage in components if needed (e.g. Recaptcha)
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
