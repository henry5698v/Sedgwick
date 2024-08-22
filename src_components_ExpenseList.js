import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  // Sample data, replace with state in real application
  const expenses = [
    { id: 1, description: 'Lunch', amount: '$12', category: 'Food' },
    { id: 2, description: 'Uber', amount: '$20', category: 'Travel' },
  ];

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <span>{expense.description}</span>
          <span>{expense.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
