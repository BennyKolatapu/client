import React from 'react';

const Recommendations = ({ recommendations }) => {
    return (
        <div>
            <h2>Recommendations</h2>
            <ul>
                {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;