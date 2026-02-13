import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { sendBookingConfirmationEmail } from '../../utils/emailService';

const OnlineSeva = () => {
    const [showModal, setShowModal] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [selectedSevas, setSelectedSevas] = useState([]);
    const { currentUser } = useAuth();

    const handleSevaToggle = (seva) => {
        if (selectedSevas.includes(seva)) {
            setSelectedSevas(selectedSevas.filter(s => s !== seva));
        } else {
            setSelectedSevas([...selectedSevas, seva]);
        }
    };

    const handleBook = () => {
        if (!currentUser) {
            alert("Please login to book sevas.");
            return;
        }
        if (selectedSevas.length === 0) {
            alert("Please select at least one seva.");
            return;
        }
        setShowModal(true);
        setIsProcessing(true);

        setTimeout(async () => {
            setIsProcessing(false);
            // Send email confirmation
            try {
                await sendBookingConfirmationEmail(
                    { name: currentUser.name, email: currentUser.email },
                    selectedSevas
                );
            } catch (err) {
                console.error("Failed to send booking email:", err);
            }
        }, 3000);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-orange-800">Online Seva</h1>
                    <p className="mt-2 text-xl text-gray-600">Perform sevas from the comfort of your home.</p>
                    <div className="mt-4">
                        <span className="font-semibold text-gray-700">Enquiry: </span>
                        <a href="tel:+919483357005" className="text-orange-600 font-bold hover:underline">+91 9483357005</a>
                    </div>
                </div>

                {/* Seva Information Section */}
                <div className="bg-white rounded-xl shadow p-6 border-l-4 border-orange-500">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Seva Information</h2>
                    <p className="text-gray-600 mb-6">Select sevas and click continue to enter Devotee details.</p>

                    <div className="space-y-4">
                        {[
                            { name: 'Alankara Seva', price: 500 },
                            { name: 'Pooja Seva', price: 200 },
                            { name: 'Annadana Seva', price: 1000 }
                        ].map((seva, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleSevaToggle(seva.name)}
                                className={`flex items-center justify-between p-4 border rounded transition cursor-pointer ${selectedSevas.includes(seva.name) ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                <span className="font-medium text-gray-800">{seva.name} - ₹{seva.price}</span>
                                <span className={`text-sm font-bold ${selectedSevas.includes(seva.name) ? 'text-orange-600' : 'text-gray-400'}`}>
                                    {selectedSevas.includes(seva.name) ? 'Selected ✓' : 'Add +'}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-right">
                        <button
                            onClick={handleBook}
                            className="bg-orange-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-orange-700 transition shadow-lg"
                        >
                            Continue to Pay
                        </button>
                    </div>
                </div>

                {/* Bank Details */}
                <div className="bg-orange-50 rounded-xl shadow p-6 border border-orange-200">
                    <h2 className="text-xl font-bold text-orange-900 mb-4">Sodematha A/c Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm sm:text-base text-gray-700">
                        <p><span className="font-semibold">Name:</span> Sode Shrivadiraja Mutt</p>
                        <p><span className="font-semibold">Bank:</span> Union Bank</p>
                        <p><span className="font-semibold">Account No:</span> 520141001126020</p>
                        <p><span className="font-semibold">Branch:</span> Sirsi</p>
                        <p><span className="font-semibold">IFSC Code:</span> UBIN0901164</p>
                    </div>
                </div>

                {/* Rules & Special Notes */}
                <div className="bg-white rounded-xl shadow p-8">
                    <h2 className="text-2xl font-bold text-red-600 mb-6 border-b pb-2">Special Note & Rules</h2>
                    <ul className="list-disc list-outside ml-5 space-y-3 text-gray-700 text-sm leading-relaxed">
                        <li>Devotees may receive daily seva prasad from the "Swamiji" or Archaka's after lunch at the ShreeMatha.</li>
                        <li>Those who want to perform sevas in their absence may send Seva Kanike through D.D / Cheque / M.O. / Online to the mentioned address. Prasad will be delivered through Post.</li>
                        <li>Kindly enquire at the office of the ShreeMath for Upanayana and other Havanas.</li>
                        <li>All Sevas at the Shreemath should be registered one month in advance at the Shreemath's Office.</li>
                        <li>All Devotees are requested to be bound by Shreemath's Rules.</li>
                        <li>Any changes in dates/cancellation/postponements of Sevas should be informed to the Shreemath's office immediately.</li>
                        <li>No other Sevas/Havanas not mentioned above will be performed at the Shree Math.</li>
                    </ul>
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
                                    <p className="text-gray-600">Verifying secure payment connection.</p>
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
                                    <p className="text-gray-600 mb-6">Your sevas have been successfully booked.</p>
                                    <p className="text-xs text-green-600 mb-4 font-bold italic italic">Confirmation email sent to {currentUser?.email}</p>
                                    <button
                                        onClick={() => { setShowModal(false); setSelectedSevas([]); }}
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

export default OnlineSeva;
