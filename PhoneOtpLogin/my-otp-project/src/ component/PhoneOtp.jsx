import React, { useState } from 'react';
import OtpLogin from './OtpLogin';

const PhoneOtp = () => {
  const [phoneOTP, setPhoneOTP] = useState('');
  const [showNumber, setShowNumber] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowNumber(true);
  };

  const handleChange = (event) => {
    setPhoneOTP(event.target.value);
  };
 const  OtpLoginFunction =()=>{

 }
 const length = 4;
 const value = 'bubun'
  return (
    <div>
      {!showNumber ? (
        <>
          <div className='text-xl'>Phone OTP</div>
          <div className='flex justify-center'>
            <form onSubmit={handleSubmit}>
              <input
              
                onChange={handleChange}
                value={phoneOTP}
                className='px-2 py-2 border-black'
                placeholder='Input OTP'
              />
              <button type='submit' className='bg-amber-400 px-2 py-2'>
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        <h1>Entered OTP is sent to {phoneOTP}</h1>
      )}


      <OtpLogin  OtpLoginFunction ={OtpLoginFunction} value={value} length={length} ></OtpLogin>
    </div>
  );
};

export default PhoneOtp;
