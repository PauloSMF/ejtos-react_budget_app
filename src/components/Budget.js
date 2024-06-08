import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);

    const maxValue = 20000;
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const newValue = event.target.value;

        if (newValue > maxValue) {
            alert(`The value cannot exceed the maximum value of £${maxValue}`);
            return;
        }

        if (newValue < totalExpenses) {
            alert(`The value cannot be lower than the total spent so far of £${totalExpenses}`);
            return;
        }

        setNewBudget(newValue);
    }

    useEffect(() => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }, [newBudget, dispatch]);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" min="0" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
