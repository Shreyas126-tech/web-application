import React, { useState } from 'react';
import axios from 'axios';
import { sendRoomBookingConfirmationEmail } from '../../utils/emailService';

const RoomBooking = () => {
    const [formData, setFormData] = useState({
        devoteeName: '',
        email: '',
        mobileNumber: '',
        checkInDate: '',
        checkOutDate: '',
        numberOfRooms: 1
    });
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await axios.post('/api/rooms/book', formData);

            // Send email confirmation
            try {
                await sendRoomBookingConfirmationEmail(
                    { name: formData.devoteeName, email: formData.email },
                    formData
                );
            } catch (err) {
                console.error("Failed to send booking confirmation email:", err);
            }

            setMessage({ type: 'success', text: 'Booking request sent successfully! You will receive an email confirmation.' });
            setFormData({ devoteeName: '', email: '', mobileNumber: '', checkInDate: '', checkOutDate: '', numberOfRooms: 1 });
        } catch (err) {
            setMessage({ type: 'error', text: 'Failed to send booking request. Please try again later.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
                    <div className="bg-orange-700 p-8 text-white">
                        <h1 className="text-3xl font-bold">Room Booking Request</h1>
                        <p className="text-orange-100 mt-2">Book your stay at Sode Matha Guesthouses</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {message && (
                            <div className={`${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} p-4 rounded-lg font-medium`}>
                                {message.text}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                <input
                                    type="text" required
                                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none"
                                    value={formData.devoteeName}
                                    onChange={(e) => setFormData({ ...formData, devoteeName: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Mobile Number</label>
                                <input
                                    type="tel" required
                                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none"
                                    value={formData.mobileNumber}
                                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Email Address</label>
                            <input
                                type="email" required
                                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Check-in Date</label>
                                <input
                                    type="date" required
                                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none"
                                    value={formData.checkInDate}
                                    onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Check-out Date</label>
                                <input
                                    type="date" required
                                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none"
                                    value={formData.checkOutDate}
                                    onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Number of Rooms</label>
                            <select
                                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 outline-none"
                                value={formData.numberOfRooms}
                                onChange={(e) => setFormData({ ...formData, numberOfRooms: parseInt(e.target.value) })}
                            >
                                {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                            </select>
                        </div>

                        <button
                            type="submit" disabled={submitting}
                            className={`w-full bg-orange-700 text-white font-bold py-3 rounded-lg hover:bg-orange-800 transition shadow-lg ${submitting ? 'opacity-50' : ''}`}
                        >
                            {submitting ? 'Sending Request...' : 'Send Booking Request'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoomBooking;
