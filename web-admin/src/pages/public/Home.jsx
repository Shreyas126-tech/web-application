import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('login') === 'success') {
            setShowSuccessPopup(true);
            // Hide popup after 4 seconds
            const timer = setTimeout(() => {
                setShowSuccessPopup(false);
                // Clean up URL
                navigate('/', { replace: true });
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [location, navigate]);

    const educationInstitutions = [
        { name: "Shri Madhwa Vadiraja Institute of Technology & Management", desc: "Engineering Your Career & Character with Care", link: "https://sode-edu.in/smvitm/" },
        { name: "Niramaya College of Nursing", desc: "Empowering Healthcare Education", link: "https://sode-edu.in/ncon/" },
        { name: "Niramaya College of Allied Health Science", desc: "Advancing clinical skills for a modern healthcare future", link: "https://sode-edu.in/ncahs/" },
        { name: "S.V.H Pre University College", desc: "Quality teaching with holistic growth.", link: "https://sode-edu.in/svh-pu-college/" },
        { name: "S.V.S English Medium Nursery and Higher Primary School", desc: "Nurturing character and empowering futures.", link: "https://sode-edu.in/svs-english-medium/" },
        { name: "S.V.H. English Medium High School", desc: "Tradition with modern excellence.", link: "https://sode-edu.in/svh-english-medium/" },
        { name: "Kadiyali English Medium School", desc: "Nurturing minds for tomorrow.", link: "https://sode-edu.in/kadiyali-english/" },
        { name: "Kadiyali Higher Primary School", desc: "Committed to quality education.", link: "https://sode-edu.in/kadiyali-kannada/" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen relative">

            {/* Login Success Popup */}
            {showSuccessPopup && (
                <div className="fixed top-20 right-4 z-50 animate-bounce">
                    <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center space-x-3 border-2 border-green-400">
                        <div className="bg-white text-green-600 rounded-full h-8 w-8 flex items-center justify-center font-bold">✓</div>
                        <div>
                            <p className="font-bold">Login Successful!</p>
                            <p className="text-xs">Welcome to Sri Sode Vadiraja Matha</p>
                        </div>
                        <button onClick={() => setShowSuccessPopup(false)} className="text-white hover:text-green-200 ml-4 font-bold">×</button>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <div className="relative bg-orange-700 text-white py-20 px-4 text-center">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Sri Sode Vadiraja Matha</h1>
                    <p className="text-xl md:text-2xl mb-8 font-light italic">Jagadguru Srimanmadhwaachaarya Moolamahaasamsthanam</p>
                    <div className="flex justify-center space-x-4">
                        <Link to="/sevas" className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                            Book Sevas
                        </Link>
                        <Link to="/history" className="bg-orange-600 border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition duration-300">
                            Our History
                        </Link>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        About Sode Matha
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        A sacred abode of spirituality and tradition.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            281 km north of Mangalore is a small village by the name of Sode. It is also known as Sodha, Sonda and Swadi. This village is special because it is the headquarters of the Sode Matha. The Sode Matha is part of the Ashta Mathas set up by Sri Madhvacharya.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            A lake known as the Hayagriva Samudra is located just outside the matha. To the west of the lake, visitors can see the Dhwaja Stamba with depictions of the Hamsa and Garuda in front of the Rama Thrivikrama temple.
                        </p>
                    </div>
                    <div className="bg-orange-100 p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-orange-800 mb-4">Quick Estimates</h3>
                        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm mb-4">
                            <span className="text-gray-700 font-medium">Renovation Cost</span>
                            <span className="text-orange-600 font-bold text-xl">30 Crores</span>
                        </div>
                        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                            <span className="text-gray-700 font-medium">Contributors</span>
                            <span className="text-green-600 font-bold text-xl">520+</span>
                        </div>
                        <div className="mt-6 text-center">
                            <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition">
                                Contribute Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Institutions */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
                        Our Education Institutions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {educationInstitutions.map((inst, index) => (
                            <a href={inst.link} target="_blank" rel="noopener noreferrer" key={index} className="block group">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition mb-2">{inst.name}</h3>
                                        <p className="text-gray-600 text-sm">{inst.desc}</p>
                                    </div>
                                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-right">
                                        <span className="text-orange-600 text-sm font-medium group-hover:underline">Visit Website &rarr;</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-orange-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-white mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl font-bold">Offer Online Seva</h2>
                        <p className="text-orange-200 mt-2">Book sevas and contribute to the matha from anywhere.</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/sevas" className="bg-white text-orange-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                            Online Seva
                        </Link>
                        <Link to="/kanike" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-orange-800 transition text-center flex items-center justify-center">
                            e-Kanike
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
