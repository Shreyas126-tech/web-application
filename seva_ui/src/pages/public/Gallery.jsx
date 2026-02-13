import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        axios.get('/api/gallery')
            .then(res => setMedia(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-orange-800 mb-8 border-b-2 border-orange-200 pb-2">Photo & Video Gallery</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array.isArray(media) && media.map(item => (
                        <div key={item.id} className="group relative bg-white rounded-lg shadow-sm overflow-hidden aspect-square">
                            <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                                <span className="text-white font-bold">{item.title}</span>
                            </div>
                            {item.type === 'VIDEO' && (
                                <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-2 py-1 rounded font-bold uppercase">Video</div>
                            )}
                        </div>
                    ))}
                    {media.length === 0 && (
                        <p className="text-gray-500 italic col-span-full">No gallery items found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
