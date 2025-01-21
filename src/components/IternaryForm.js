import React, { useState } from 'react';

const ItineraryForm = ({ onCreate }) => {
    const [destination, setDestination] = useState('');
    const [dates, setDates] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ destination, dates });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Dates"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                required
            />
            <button type="submit">Create Itinerary</button>
        </form>
    );
};

export default ItineraryForm;