import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, FileText, Music } from 'lucide-react';

const Artefacts = () => {
    const [artefacts, setArtefacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('/api/artefacts')
            .then(res => setArtefacts(res.data))
            .catch(err => console.error(err));
    }, []);

    const filtered = Array.isArray(artefacts) ? artefacts.filter(a =>
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.category.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-4xl font-bold text-orange-800 border-b-2 border-orange-200 pb-2">Matha Publications & Artefacts</h1>
                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Search publications..."
                            className="w-full pl-10 pr-4 py-2 rounded-full border border-orange-200 outline-none focus:ring-2 focus:ring-orange-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(item => (
                        <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-orange-50 hover:shadow-md transition flex items-center gap-4">
                            <div className="bg-orange-100 p-3 rounded-lg text-orange-700">
                                {item.fileType === 'PDF' ? <FileText className="w-8 h-8" /> : <Music className="w-8 h-8" />}
                            </div>
                            <div className="flex-grow">
                                <span className="text-[10px] text-orange-600 font-bold uppercase tracking-widest">{item.category}</span>
                                <h3 className="font-bold text-gray-800">{item.title}</h3>
                                <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" className="text-orange-600 text-sm hover:underline flex items-center mt-1">
                                    Download {item.fileType}
                                </a>
                            </div>
                        </div>
                    ))}
                    {filtered.length === 0 && (
                        <p className="text-gray-500 italic col-span-full">No publications found matching your search.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Artefacts;
