import React from 'react';

const PersonalizedRecommendations = ({ recommendations }) => {
    return (
        <div>
            <h2>Your Personalized Recommendations</h2>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </div>
    );
};

export default PersonalizedRecommendations;