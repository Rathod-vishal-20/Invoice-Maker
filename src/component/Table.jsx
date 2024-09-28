import React, { useState } from 'react';

function Table() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { invoice: '', date: '', from: '', to: '', amount: '' }]);
  };

  const cancelLastItem = () => {
    setItems(items.slice(0, -1));
  };

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (parseFloat(item.amount) || 0), 0).toFixed(2);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='flex flex-col p-6 bg-gray-100 '>
      <div className='flex justify-between mb-4 print-hidden'>
        <button
          className='text-white bg-blue-600 border rounded-md w-32'
          onClick={addItem}
        >
          Add Item
        </button>
        <button
          className='text-white bg-red-600 border rounded-md w-32'
          onClick={cancelLastItem}
          disabled={items.length === 0} // Disable if no items
        >
          Cancel Last Item
        </button>
      </div>
      <div className='flex flex-row justify-between font-semibold mb-2 border-b-2 border-gray-300'>
        <div className='w-1/5 text-center'>Invoice</div>
        <div className='w-1/5 text-center'>Date</div>
        <div className='w-1/5 text-center'>From</div>
        <div className='w-1/5 text-center'>To</div>
        <div className='w-1/5 text-center'>Amount</div>
      </div>
      {items.map((item, index) => (
        <div key={index} className='flex flex-row justify-between items-center border-b border-gray-300 py-2'>
          <input
            type='text'
            value={item.invoice}
            onChange={(e) => handleChange(index, 'invoice', e.target.value)}
            className='border border-gray-400 rounded-md p-2 w-1/5 mr-2'
            placeholder='Enter Invoice'
          />
          <input
            type='date'
            value={item.date}
            onChange={(e) => handleChange(index, 'date', e.target.value)}
            className='border border-gray-400 rounded-md p-2 w-1/5 mr-2'
          />
          <input
            type='text'
            value={item.from}
            onChange={(e) => handleChange(index, 'from', e.target.value)}
            className='border border-gray-400 rounded-md p-2 w-1/5 mr-2'
            placeholder='From'
          />
          <input
            type='text'
            value={item.to}
            onChange={(e) => handleChange(index, 'to', e.target.value)}
            className='border border-gray-400 rounded-md p-2 w-1/5 mr-2'
            placeholder='To'
          />
          <input
            type='number'
            value={item.amount}
            onChange={(e) => handleChange(index, 'amount', e.target.value)}
            className='border border-gray-400 rounded-md p-2 w-1/5'
            placeholder='Amount'
          />
        </div>
      ))}
      <div className='flex flex-row justify-between font-semibold mt-4'>
        <span>Total Amount:</span>
        <span>{calculateTotal()}</span>
      </div>
      <button
        onClick={handlePrint}
        className='text-white bg-green-600 border rounded-md w-32 mt-4 print-hidden'
      >
        Print Form
      </button>

      <style jsx>{`
        @media print {
          .print-hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Table;
