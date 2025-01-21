const API_URL = process.env.REACT_APP_API_URL;

export const fetchUserdata = async (userId) => {
    const response = await fetch(`${API_URL}/users/${userId}`);
    return response.json();
};

export const createItinerary = async (itineraryData) => {
    const response = await fetch(`${API_URL}/itineraries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(itineraryData),
    });
    return response.json();
};