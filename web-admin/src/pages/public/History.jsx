import React from 'react';

const swamijis = [
    "Sri Vishnutirtha", "Sri Vyaasatirtha", "Sri Vedyatirtha", "Sri Vedagarbhatirtha",
    "Sri Vareshatirtha", "Sri Vamanatirtha", "Sri Vasudevatirtha", "Sri Vedavyasatirtha",
    "Sri Varahatirtha", "Sri Vedatmatirtha", "Sri Vishwavandyatirtha - I", "Sri Ratnagarbhatirtha",
    "Sri Vedangatirtha", "Sri Vidyapatitirtha", "Sri Vishwavandyatirtha - II", "Sri Vishwatirtha",
    "Sri Vitthalatirtha", "Sri Varadarajatirtha - I", "Sri Vagishatirtha", "Sri Vadirajatirtharu",
    "Sri Vedavedyatirtha - (1530-1616)", "Sri Vidyanidhitirtha", "Sri Vedanidhitirtha",
    "Sri Varadarajatirtha - II", "Sri Vishwadhirajatirtha", "Sri Vadivandyatirtha",
    "Sri Vishwavandyatirtha - III", "Sri Vibudhavaryatirtha", "Sri Vishwanidhitirtha",
    "Sri Vishwadhishwaratirtha", "Sri Vishweshatirtha", "Sri Vishwapriyatirtha (Srimadvrindavan acharya) - 1774-1865",
    "Sri Vishwadhishatirtha", "Sri Vishwendratirtha", "Sri Vishwottamatirtha : (1934-2007)",
    "Sri Vishwavallabhatirtha (The Present Pontiff)"
];

const History = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-orange-800 sm:text-5xl mb-4">
                        Sri Sode Vadiraja Matha Parampara
                    </h1>
                    <p className="text-xl text-gray-600 font-light italic max-w-3xl mx-auto">
                        Jagadguru Srimanmadhwaachaarya Moolamahaasamsthanam Aacharya Madhwa Lineage of the Swamijis of Sri Sode Mata
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-orange-100">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                        The lives of human beings are generally routine in nature, during most part of their life span, without much change in their daily work. It is therefore natural for people to aspire and try for happiness, peace and all possible worldly comforts during their life time. They get attracted by and inclined towards objects of enjoyment. But like day and night, there also exist sorrow, pain, fear, uncertainties, difficulties etc, which affect everybody at one time or other, with variable degrees. They cannot be avoided completely by anybody. These negative aspects cause mental disturbance and affect the peace of mind. The people struggle for solutions, sometime without desired results. Then the belief in God, Who is considered to be omnipresent, omniscient and omnipotent assumes greater importance. Craving for solace, solutions and peace, the people seek the blessing advice of learned scholars and sages. In bygone days, the saint scholars used to live in the secluded places like Ashrama, temple, Matha and others. With the power of austerity, they tried their best to help and rescue the mankind from mundane worries and sufferings. They alarmed the world about the evil results of deep involvement in worldly pleasures and enjoyment. They cautioned about righteous and unrighteous paths and urged to follow righteous path for the benefit in this life and the life hereafter. They used to preach the essence of sacred lores – Veda, Upanishads and others and showed the noble path of worship of the Lord and other deities with pure devotion. Thus, these centres became the abodes of blessing solace to grief stricken beings.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed text-justify">
                        Later on, these centres were replaced by Mathas. Mathas were the religious centres headed by a Sanyasin with learned scholars and learning pupils. Belonging to one or other cult, Mathas have been playing an important role in continuing the teaching-learning process of sacred lores and preserving the culture and heritage. The saint scholars of theistic and atheistic schools established some Mathas to propagate the doctrines of their schools and promote the cultured tradition.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {swamijis.map((name, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border-t-4 border-orange-500 group">
                            <div className="p-6 text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition duration-300">
                                    <span className="text-xl font-bold text-orange-800 group-hover:text-white transition duration-300">{index + 1}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-700 transition duration-300">
                                    {name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default History;
