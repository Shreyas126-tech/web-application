import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { sendKanikeConfirmationEmail } from '../../utils/emailService';

const Kanike = () => {
    const [showModal, setShowModal] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [amount, setAmount] = useState('');
    const { currentUser } = useAuth();

    const handlePay = () => {
        if (!currentUser) {
            alert("Please login to offer Kanike.");
            return;
        }
        if (!amount || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }
        setShowModal(true);
        setIsProcessing(true);

        setTimeout(async () => {
            setIsProcessing(false);
            // Send email confirmation
            try {
                await sendKanikeConfirmationEmail(
                    { name: currentUser.name, email: currentUser.email },
                    amount
                );
            } catch (err) {
                console.error("Failed to send kanike email:", err);
            }
        }, 3000);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100">
                <div className="bg-orange-700 py-6 px-8">
                    <h1 className="text-3xl font-bold text-white text-center">e-Kanike</h1>
                    <p className="text-orange-100 text-center mt-2">Support the Matha through your contributions</p>
                </div>

                <div className="p-8 space-y-8">
                    {/* Enquiry Section */}
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-700">Enquiry</h2>
                        <a href="tel:+919483357005" className="text-2xl font-bold text-orange-600 hover:underline block mt-2">
                            +91 9483357005
                        </a>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Bank Details */}
                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                        <h2 className="text-2xl font-bold text-orange-800 mb-4 border-b border-orange-300 pb-2">
                            Sodematha A/c Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                            <div>
                                <p className="font-semibold">Account Name</p>
                                <p className="text-lg">Sode Shrivadiraja Mutt</p>
                            </div>
                            <div>
                                <p className="font-semibold">Account No</p>
                                <p className="text-lg font-mono">520141001126020</p>
                            </div>
                            <div>
                                <p className="font-semibold">IFSC Code</p>
                                <p className="text-lg font-mono">UBIN0901164</p>
                            </div>
                            <div>
                                <p className="font-semibold">Bank</p>
                                <p className="text-lg">Union Bank</p>
                            </div>
                            <div>
                                <p className="font-semibold">Branch</p>
                                <p className="text-lg">Sirsi</p>
                            </div>
                        </div>
                    </div>

                    {/* UPI Details */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sodematha UPI Payment</h2>
                        <p className="text-gray-600 mb-4">
                            Make direct Seva / Kanike contributions using Sodematha UPI.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-4 md:mb-0">
                                <p className="font-semibold text-gray-700">Instructions:</p>
                                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                                    <li>Use UPI ID for direct transfer.</li>
                                    <li>Enter amount and confirm.</li>
                                    <li>Share payment screenshot to <a href="mailto:seva@sodematha.in" className="text-orange-600 hover:underline">seva@sodematha.in</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">E-Kanike Devotee Details</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 bg-gray-100"
                                    value={currentUser?.name || ''}
                                    readOnly
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 bg-gray-100"
                                    value={currentUser?.email || ''}
                                    readOnly
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 bg-gray-100"
                                    value={currentUser?.phone || ''}
                                    readOnly
                                />
                                <input
                                    type="number"
                                    placeholder="Amount (₹)"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                />
                            </div>
                            <textarea placeholder="Address / Message (Optional)" rows="3" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"></textarea>
                            <button
                                type="button"
                                onClick={handlePay}
                                className="w-full bg-orange-600 text-white font-bold py-3 rounded hover:bg-orange-700 transition shadow-lg"
                            >
                                Proceed to Pay
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Mock Payment Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="text-center">
                            {isProcessing ? (
                                <>
                                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto mb-4"></div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Connecting to Gateway...</h2>
                                    <p className="text-gray-600">Please do not refresh the page.</p>
                                    <p className="text-xs text-gray-400 mt-4 italic">Environment: SANDBOX (Dummy Keys Used)</p>
                                </>
                            ) : (
                                <>
                                    <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
                                    <p className="text-gray-600 mb-2">Your contribution has been received.</p>
                                    <p className="text-xs text-green-600 mb-6 font-bold italic italic">Confirmation email sent to {currentUser?.email}</p>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="w-full bg-orange-600 text-white font-bold py-2 rounded hover:bg-orange-700 transition"
                                    >
                                        Close
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

export default Kanike;
