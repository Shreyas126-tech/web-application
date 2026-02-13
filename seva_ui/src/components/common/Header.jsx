import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <header className="bg-orange-700 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Title */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-white text-xl font-bold tracking-wider">
                            Sode Sri Vadiraja Matha
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-1 items-center">
                        <Link to="/" className="text-orange-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Home</Link>
                        <Link to="/history" className="text-orange-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">History</Link>
                        <Link to="/daily-worship" className="text-orange-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Worship</Link>
                        <Link to="/sevas" className="text-orange-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Sevas</Link>
                        <Link to="/events" className="text-orange-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Events</Link>
                        <Link to="/gallery" className="text-orange-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Gallery</Link>
                        <Link to="/artefacts" className="text-orange-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Artefacts</Link>
                        <Link to="/room-booking" className="text-orange-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Room Booking</Link>
                        <Link to="/contact" className="text-orange-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition mr-2">Contact</Link>

                        {currentUser ? (
                            <div className="flex items-center space-x-3 ml-2 border-l border-orange-600 pl-4">
                                <span className="text-white text-sm font-bold">Namaste, {currentUser.name || 'Bhaktas'}</span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-orange-800 text-white hover:bg-orange-900 px-3 py-1.5 rounded text-xs font-bold transition border border-orange-500"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2 ml-2 border-l border-orange-600 pl-4">
                                <Link to="/login" className="text-orange-100 hover:text-white px-3 py-2 rounded text-sm font-bold transition">Login</Link>
                                <Link to="/signup" className="bg-white text-orange-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-bold transition">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-orange-100 hover:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-orange-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">Home</Link>
                        <Link to="/history" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">History</Link>
                        <Link to="/daily-worship" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">Daily Worship</Link>
                        <Link to="/sevas" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">Sevas</Link>
                        <Link to="/events" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">Events</Link>
                        <Link to="/gallery" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">Gallery</Link>
                        <Link to="/artefacts" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">Artefacts</Link>
                        <Link to="/room-booking" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">Room Booking</Link>
                        <Link to="/contact" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">Contact</Link>

                        {currentUser ? (
                            <div className="border-t border-orange-700 mt-2 pt-2 pb-2">
                                <div className="px-3 text-orange-200 text-sm mb-2">Logged in as: {currentUser.name}</div>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left bg-orange-900 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800"
                                >
                                    Log out
                                </button>
                            </div>
                        ) : (
                            <div className="border-t border-orange-700 mt-2 pt-2">
                                <Link to="/login" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">Login</Link>
                                <Link to="/signup" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600">Sign Up</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
