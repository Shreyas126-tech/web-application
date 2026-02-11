import React from 'react';

const branches = [
    { place: "Udupi", name: "Sri Sode Vadiraja Matha", address: "Carstreet, Udupi", phone: "+91 820 2524004" },
    { place: "Sonda", name: "Sri Sode Vadiraja Matha", address: "Sonda, Sirsi Taluk", phone: "+91 9483357005" },
    { place: "Gokarna", name: "Sri Sode Vadiraja Matha", address: "Gokarna", phone: "9449640074" },
    { place: "Kumbhasi", name: "Sri Sode Vadiraja Matha", address: "Kumbhasi", phone: "9141348548" },
    { place: "Chennai", name: "Sri Sode Vadiraja Matha", address: "T Nagara Chennai", phone: "09092946633" },
];

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-orange-800 sm:text-5xl mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600">
                        Get in touch with Sri Sode Vadiraja Matha and its branches.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {branches.map((branch, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 hover:shadow-lg transition duration-300">
                            <h3 className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-1">{branch.place}</h3>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">{branch.name}</h2>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p><span className="font-semibold text-gray-800">Address:</span> {branch.address}</p>
                                <p><span className="font-semibold text-gray-800">Phone:</span> {branch.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <div className="p-6 bg-orange-50 border-b border-orange-100 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-orange-800">Location Map</h2>
                        <span className="text-orange-600 text-sm font-medium">Udupi Main Branch</span>
                    </div>
                    <div className="h-[500px] w-full">
                        <iframe
                            title="Sode Matha Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.204555890008!2d74.74780827585!3d13.337537307044033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a84497e743%3A0xe744fb8d3637651a!2sSode%20Sri%20Vadiraja%20Mutt%20Udupi!5e0!3m2!1sen!2sin!4v1707660000000!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
