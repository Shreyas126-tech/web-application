import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-auto py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-orange-400">Sode Sri Vadiraja Matha</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Preserving the sanctity and traditions of our heritage. A place of spiritual solace and divine blessings.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-orange-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-300 hover:text-white transition text-sm">Home</Link></li>
                            <li><Link to="/sevas" className="text-gray-300 hover:text-white transition text-sm">Sevas & Poojas</Link></li>
                            <li><Link to="/history" className="text-gray-300 hover:text-white transition text-sm">History</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-orange-400">Contact Info</h3>
                        <p className="text-gray-400 text-sm mb-2">Car Street, Udupi, Karnataka.</p>
                        <p className="text-gray-400 text-sm mb-2">Phone: +91 948 335 7005</p>
                        <p className="text-gray-400 text-sm">Email: office@sodematha.in</p>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Sode Sri Vadiraja Matha. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
