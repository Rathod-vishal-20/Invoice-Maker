import React from 'react';

function Header({
  recipientName,
  recipientDetails,
  mobileNumber,
  invoiceNumber,
  invoiceDate,
  onRecipientChange,
  onMobileChange,
  onInvoiceNumberChange,
  onDateChange,
}) {
  return (
    <>
      <h1 className='flex justify-center mt-3'>Invoice</h1>
      <div className='flex justify-center mt-3'>
        <header className="text-4xl font-semibold flex justify-center">
          <div>
            ANKIT TRANSPORT & PARCEL SERVICE <br />
            <span className="text-xl font-semibold px-12 -tracking-normal">
              NH 48, Waliv, Vasai Fata, Near Bajrangbali Mandir, <br />
              <span className="px-36">Vasai (East), Paighar</span>
            </span>
          </div>
        </header>
      </div>
      <div className='ml-20 mt-5 flex justify-around'>
        <div className='flex flex-col'>
          <h1 className='font-bold'>To,</h1>
          <div className='w-80'>
            <textarea
              className="h-20 border border-gray-400 w-full p-2 rounded-md"
              placeholder="Enter recipient name and details"
              value={recipientDetails}
              onChange={onRecipientChange}
              maxLength="1200"
              rows="4" 
            />
            <div className="flex items-center gap-2 mt-2 mb-10">
              <span>+91</span>
              <input
                type="tel"
                className='border border-gray-400 rounded-md p-2 w-32 '
                maxLength={10}
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={onMobileChange}
              />
            </div>
          </div>
        </div>

        <div className="text-xl mt-4 flex flex-col gap-2">
          <div className="flex items-center">
            <label className="mr-2">Invoice No:</label>
            <input
              type="text"
              className='border border-gray-400 rounded-md p-2'
              value={invoiceNumber}
              onChange={onInvoiceNumberChange}
            />
          </div>
          <div className="flex items-center">
            <label className="mr-2 ">Date:</label>
            <input 
              type="date"
              className='border border-gray-400 rounded-md p-2 ml-14'
              value={invoiceDate}
              onChange={onDateChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
