import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/api/events')
            .then(res => setEvents(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-orange-800 mb-8 border-b-2 border-orange-200 pb-2">Event Calendar</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.isArray(events) && events.map(event => (
                        <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition p-6 border-l-4 border-orange-600">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded uppercase">{event.type}</span>
                                <span className="text-gray-500 text-sm font-medium">{new Date(event.eventDate).toLocaleDateString()}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                            <p className="text-gray-600 mb-4">{event.description}</p>
                            <div className="flex items-center text-gray-400 text-sm italic">
                                <span>Location: {event.location || "Sode Matha"}</span>
                            </div>
                        </div>
                    ))}
                    {events.length === 0 && (
                        <p className="text-gray-500 italic col-span-full">No upcoming events found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Events;
