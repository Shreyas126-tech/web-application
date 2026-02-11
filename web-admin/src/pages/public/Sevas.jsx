import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { sendBookingConfirmationEmail } from '../../utils/emailService';

const Sevas = () => {
    const [showModal, setShowModal] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [selectedSeva, setSelectedSeva] = useState(null);
    const { currentUser } = useAuth();

    const dailySevas = [
        { name: "Alankara Seva", price: "₹ 500", desc: "Special decoration for the deity." },
        { name: "Pooja Seva", price: "₹ 200", desc: "Daily pooja offering." },
        { name: "Annadana Seva", price: "₹ 1000", desc: "Serving food to devotees." },
    ];

    const poojaTimings = [
        {
            temple: "SHRI RAMATRIVIKRAMA TEMPLE",
            timings: [
                { name: "USHAHA KAALAPOOJA", time: "MORNING 5:00 AM TO 5:30 AM" },
                { name: "MAHAPOOJA", time: "MORNING 8:00 AM TO 8:30 AM" },
                { name: "NIGHT POOJA", time: "NIGHT 6:00 PM TO 6:30 PM" }
            ]
        },
        {
            temple: "SHRI VADIRAJARU TEMPLE",
            timings: [
                { name: "USHAHA KAALAPOOJA", time: "MORNING 5:30 AM TO 6:00 AM" },
                { name: "PANCHAMRUTA ABHISHEKA", time: "MORNING 7:00 AM TO 7:30 AM" },
                { name: "MAHAPOOJA", time: "MORNING 8:30 AM TO 9:00 AM" },
                { name: "NIGHT POOJA", time: "NIGHT 6:30 PM TO 7:00 PM" }
            ]
        }
    ];

    const handleBook = (seva) => {
        if (!currentUser) {
            alert("Please login to book sevas.");
            return;
        }
        setSelectedSeva(seva);
        setShowModal(true);
        setIsProcessing(true);

        setTimeout(async () => {
            setIsProcessing(false);
            // Send email confirmation
            try {
                await sendBookingConfirmationEmail(
                    { name: currentUser.name, email: currentUser.email },
                    seva.name
                );
            } catch (err) {
                console.error("Failed to send booking email:", err);
            }
        }, 3000);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-orange-800 sm:text-5xl">
                        Daily Sevas & Poojas
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Sanctify your life by offering Sevas to the Lord.
                    </p>
                </div>

                {/* Pooja Timings Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-orange-200 pb-2 inline-block">
                        Temple Timings
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {poojaTimings.map((temple, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100">
                                <div className="bg-orange-50 px-6 py-4 border-b border-orange-100">
                                    <h3 className="text-lg font-bold text-orange-900">{temple.temple}</h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        {temple.timings.map((t, i) => (
                                            <li key={i} className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{t.name}</span>
                                                <span className="text-gray-800 font-medium">{t.time}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Special Poojas & Prasada */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                            <h3 className="text-lg font-bold text-orange-900 mb-4">SHRI BOTARAJARA RATRI VISHESHA POOJA</h3>
                            <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                                <span className="font-semibold text-gray-600">NIGHT POOJA</span>
                                <span className="text-gray-900">7:00 PM TO 7:30 PM</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
                            <h3 className="text-lg font-bold text-orange-900 mb-4">ANNA PRASADA</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                                    <span className="font-semibold text-gray-600">LUNCH</span>
                                    <span className="text-gray-900">11:30 AM TO 1:30 PM</span>
                                </div>
                                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                                    <span className="font-semibold text-gray-600">DINNER</span>
                                    <span className="text-gray-900">7:30 PM TO 9:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Online Seva Booking */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-orange-200 pb-2 inline-block">
                        Propitiate the Lord (Online Seva)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {dailySevas.map((seva, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
                                <div className="p-6 flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{seva.name}</h3>
                                    <p className="text-3xl font-bold text-orange-600 mb-4">{seva.price}</p>
                                    <p className="text-gray-500">{seva.desc}</p>
                                </div>
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                    <button
                                        onClick={() => handleBook(seva)}
                                        className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Mock Payment Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
                        <div className="text-center">
                            {isProcessing ? (
                                <>
                                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto mb-4"></div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Processing Booking...</h2>
                                    <p className="text-gray-600 font-semibold">{selectedSeva?.name}</p>
                                    <p className="text-gray-500 text-sm">Verifying secure payment connection.</p>
                                    <p className="text-xs text-gray-400 mt-4 italic">Environment: SANDBOX (Dummy Keys Used)</p>
                                </>
                            ) : (
                                <>
                                    <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
                                    <p className="text-gray-600 mb-6 font-medium">Your request for <span className="text-orange-600">{selectedSeva?.name}</span> has been received.</p>
                                    <p className="text-xs text-green-600 mb-4 font-bold italic italic">Confirmation email sent to {currentUser?.email}</p>
                                    <button
                                        onClick={() => { setShowModal(false); setSelectedSeva(null); }}
                                        className="w-full bg-orange-600 text-white font-bold py-2 rounded hover:bg-orange-700 transition"
                                    >
                                        OK
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sevas;
