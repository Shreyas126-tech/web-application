import React from 'react';

const deities = [
    {
        name: "Sri Bhuvaraha",
        desc: "Sri Madhvacharya blessed this Bhuvaraha icon to Sri Vishnu-tirtha, founder pontiff of Sri Sode Vadiraja Matha. The Bhuvaraha icon is unique styled one where Lord Bhuvaraha rests on the hood of a lordly serpent with Bhudevi (form of goddess Lakshmi) sitting on the left thigh of the Lord. The Lord appears to be pleased and eager to grant merciful bliss to his consort. It is worshipped as the presiding and favourite deity of Parampara."
    },
    {
        name: "Sri Hayagriva",
        desc: "When a goldsmith tended to cast the metal into a mould to make the icon of Vighnesha, it casually turned into an icon of Hayagriva. He tried again and again but failed. He placed that icon at the corner as if unwanted. Then, the supreme Lord of Hayagriva form used to present in that voluntarily. It was nothing but an Archavatara of Hayagriva form. Then the Lord appeared in the dream of Vadiraja and asked him to take the icon for daily worship. He assured that he was doing Archavatara as promised. The Lord also instructed the goldsmith in dream to offer that icon to the saint. Next day, Sri Vadiraja came to the abode of goldsmith and saw that Hayagriva icon which was dazzling with gracious and holy presence of the Lord. He took the icon and kept on the Peetha with Bhuvaraha and worshipped with glorious adoration. This is also presiding deity of Parampara."
    },
    {
        name: "Sri Lakshmi Narasimha",
        desc: "On pilgrimage, once Sri Vadiraja, with followers, was roaming about in Kurukshetra land. He went to Bhimakunda (a pond), took out the club used by Bhimasena and showed to others. He also took Sri Lakshmi Narasimha icon duly worshipped by Bhimasena. Since then, that icon is being worshipped in the Parampara peetha by the pontiffs of Sri Sode Vadirajamatha."
    },
    {
        name: "Sri Vitthala",
        desc: "Once, Sri Vadiraja had been to Gautama cave. It was the holy spot of penance of sage Gautama. He saw an icon of Vitthala originally adored by four faced Brahma. Brahma blessed that icon to sage Gautama performing the rigorous penance. Sage Gautama worshipped it to his full content and kept in that cave. Sri Vadiraja collected that icon and used to worship in the Paramparapeetha."
    },
    {
        name: "Kadugolu Sri Krishna",
        desc: "Sri Madhvacharya blessed different icons to number of disciples consisting of pontiffs and householders. An icon of Krishna holding churning rod and rope in hands and worshipped by Madhva, was given to Sri Vadiraja Matha at the time of Vrinda-vanacharya (1774-1865) by the descendents of householder concerned. Since then, it is being worshipped in Paramparapeetha."
    },
    {
        name: "Garudavahana Sri Lakshmi Narayana",
        desc: "It is also worshipped by Sri Madhvacharya. Lord Narayana with his consort goddess Lakshmi is sitting on his vehicle god Garuda. It is worshipped daily with the Balamuri conch."
    },
    {
        name: "Sri Rama & Sri Vitthala",
        desc: "Once, Vali and Sugriva did penance and propitiated god Brahma. Pleased with the penance, Brahma blessed the icons of Sri Rama and Sri Vitthala. Both Vali and Sugriva worshipped those icons with special adoration. At the end of Tretayuga, icons were kept underground with abundant treasure. In this age (Yuga),Sri Vadiraja, with his intuitive knowledge was knowing all that. Around 1527 A.D, when Vijayanagara dynasty was facing financial crisis,Sri Vadiraja went to Vijayanagara and unearthed the abundant treasure and gave to Krishnadevaraya and Achyutadevaraya. He took those two icons of Rama and Vitthala and worshipped daily."
    },
    {
        name: "Lord Srinivasa with Sridevi and Bhudevi",
        desc: "Once,Sri Vadiraja wished to have the Darshana of Lord Venkateshwara. When he came to Tirupati, he saw the rocks of steps appearing as Saligrama and felt uneasy to tread on them. So, he climbed the hill on his knees singing the glory of the Lord.Sri Vadiraja worshipped that Presiding deity to his entire satisfaction and offered him a garland of one hundred eight Saligramas. That Saligrama garland adorns the Lord even today. The Lord, being very much pleased, blessed Sri Vadiraja his icon with Sri and Bhu. The gracious presence of Lord Srinivasa with Sri and Bhu in those icons is complete. Since then, those icons have been being worshipped in Paramparapeetha of Sri Sode Vadiraja Matha."
    }
];

const DailyWorship = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-orange-800 sm:text-5xl mb-4">
                        Daily Worshipped Deities
                    </h1>
                    <p className="text-xl text-gray-600">
                        The sacred deities worshipped daily in the Parampara.
                    </p>
                </div>

                <div className="space-y-12">
                    {deities.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                            <div className="bg-orange-50 px-6 py-4 border-b border-orange-100">
                                <h2 className="text-2xl font-bold text-orange-800">{item.name}</h2>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DailyWorship;
