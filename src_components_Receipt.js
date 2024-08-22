import React from 'react';
import './Receipt.css';

function Receipt() {
  // Sample data, replace with props in real application
  const receiptData = {
    id: '001',
    amount: '$12',
    description: 'Lunch',
    date: '2024-08-10',
  };

  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <p>ID: {receiptData.id}</p>
      <p>Amount: {receiptData.amount}</p>
      <p>Description: {receiptData.description}</p>
      <p>Date: {receiptData.date}</p>
    </div>
  );
}

export default Receipt;
