
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDiscountCode } from '../redux/discountSlice';

const DiscountCode = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const discountCode = useSelector((state) => state.discount.discountCode);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleValidate = () => {
    const regex = /^DISCOUNT2024$/;
    if (regex.test(code)) {
      dispatch(setDiscountCode(code));
    } else {
      alert('Invalid discount code');
    }
  };

  const handleGenerate = () => {
    alert('Generated Code: NEWCODE123');
  };

  return (
    <div className="flex flex-col space-y-2">
      <input
        type="text"
        value={code}
        onChange={handleChange}
        placeholder="Enter discount code"
        className="border p-2 rounded"
      />
      <button
        onClick={handleValidate}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Validate Code
      </button>
      <button
        onClick={handleGenerate}
        className="bg-green-500 text-white p-2 rounded"
      >
        Generate Code
      </button>
    </div>
  );
};

export default DiscountCode;
