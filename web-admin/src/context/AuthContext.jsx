import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for logged in user in local storage
        const storedUser = localStorage.getItem('sode_matha_user');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const signup = async (userData) => {
        // Get existing users or empty array
        const users = JSON.parse(localStorage.getItem('sode_matha_users') || '[]');

        // Check if user already exists
        const exists = users.find(u => u.email === userData.email || u.phone === userData.phone);
        if (exists) {
            return Promise.reject(new Error("User with this email or phone already exists."));
        }

        // Add user with unique ID
        const newUser = { ...userData, id: Date.now().toString() };
        users.push(newUser);
        localStorage.setItem('sode_matha_users', JSON.stringify(users));

        // Auto login after signup
        setCurrentUser(newUser);
        localStorage.setItem('sode_matha_user', JSON.stringify(newUser));

        return Promise.resolve(newUser);
    };

    const login = async (identifier, password) => {
        const users = JSON.parse(localStorage.getItem('sode_matha_users') || '[]');

        const user = users.find(u => (u.email === identifier || u.phone === identifier) && u.password === password);

        if (user) {
            setCurrentUser(user);
            localStorage.setItem('sode_matha_user', JSON.stringify(user));
            return Promise.resolve(user);
        } else {
            return Promise.reject(new Error("Invalid email/phone or password."));
        }
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('sode_matha_user');
        return Promise.resolve();
    };

    const value = {
        currentUser,
        signup,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
