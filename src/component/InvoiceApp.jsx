import React, { useState } from 'react';
import Header from './header';

function InvoiceApp() {
  const [recipientDetails, setRecipientDetails] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');

  return (
    <div>
      <Header 
        recipientDetails={recipientDetails}
        mobileNumber={mobileNumber}
        invoiceNumber={invoiceNumber}
        invoiceDate={invoiceDate}
        onRecipientChange={(e) => setRecipientDetails(e.target.value)}
        onMobileChange={(e) => setMobileNumber(e.target.value)}
        onInvoiceNumberChange={(e) => setInvoiceNumber(e.target.value)}
        onDateChange={(e) => setInvoiceDate(e.target.value)}
      />
      
    </div>
  );
}

export default InvoiceApp;
