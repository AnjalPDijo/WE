import React from 'react';
import './Featured.css'; // Your CSS file for styling the grid

const BankCardGrid = () => {
  return (
    <div className="bank-card-grid">
      <a href="https://www.co-operativebank.co.uk/products/loans/">
      <div className="bank-card">
      <img src="https://download.logo.wine/logo/The_Co-operative_Bank/The_Co-operative_Bank-Logo.wine.png" alt="Coorporate Bank" />
        <p>Coorporate Bank</p> 
      </div>
      </a>
      <a href="https://www.psbloansin59minutes.com/canarabank">
      <div className="bank-card">
        <img src="https://th.bing.com/th/id/OIP.wgJHtwzKa6ADdNnkr1UTYgHaHZ?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Canara Bank" />
        <p>Canara Bank</p>
      </div>
      </a>
      <a href="https://www.sbiloansin59minutes.com/home">
      <div className="bank-card">
        <img src="https://image.pngaaa.com/39/4442039-middle.png" alt="State Bank" />
        <p>State Bank</p>
      </div>
      </a>
      <a href="https://synergy.hdbfs.com/quickapply/?Product=MLL">
      <div className="bank-card">
        <img src="https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-emblem.png" alt="HDFC Bank" />
        <p>HDFC Bank</p>
      </div>
      </a>
      <a href="https://www.icicibank.com/rural/microbanking/self-help-groups">
      <div className="bank-card">
        <img src="https://www.freelogovectors.net/wp-content/uploads/2023/01/icici-bank-logo-freelogovectors.net_.png" alt="ICICI Bank" />
        <p>ICICI Bank</p>
      </div>
      </a>
    </div>
  );
};

export default BankCardGrid;