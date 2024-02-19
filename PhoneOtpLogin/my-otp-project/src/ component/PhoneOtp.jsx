import React, { useState } from 'react';

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
    </div>
  );
};

export default PhoneOtp;
