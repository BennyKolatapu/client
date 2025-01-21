import React, { useState } from 'react';

const BudgetForm = ({ onBudgetSubmit }) => {
    const [budget, setBudget] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onBudgetSubmit(budget);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
            />
            <button type="submit">Set Budget</button>
        </form>
    );
};

export default BudgetForm;