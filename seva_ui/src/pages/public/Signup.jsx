import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { sendConfirmationEmail } from '../../utils/emailService';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            await signup({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            });

            // Send confirmation email (non-blocking)
            sendConfirmationEmail({
                name: formData.name,
                email: formData.email
            }).catch(err => {
                console.error("Email confirmation failed:", err);
                alert("Account created, but email confirmation failed: " + (err.text || err.message || "Check console"));
            });

            navigate('/?login=success');
        } catch (err) {
            setError(err.message || "Signup failed.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-orange-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-orange-800">Create Account</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join Sri Sode Vadiraja Matha community
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                        <p className="text-sm text-red-700">{error}</p>
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            name="phone"
                            type="tel"
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                            placeholder="Your Mobile Number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                            placeholder="Minimum 6 characters"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                            name="confirmPassword"
                            type="password"
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                            placeholder="Re-enter password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none transition mt-6"
                    >
                        Sign up
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-bold text-orange-600 hover:text-orange-500 underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
