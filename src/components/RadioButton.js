
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOption } from '../redux/discountSlice';

const RadioButtons = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.discount.selectedOption);

  const handleChange = (event) => {
    dispatch(setOption(event.target.value));
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="block">
        <input
          type="radio"
          value="Option A"
          checked={selectedOption === 'Option A'}
          onChange={handleChange}
          className="mr-2"
        />
        Option A
      </label>
      <label className="block">
        <input
          type="radio"
          value="Option B"
          checked={selectedOption === 'Option B'}
          onChange={handleChange}
          className="mr-2"
        />
        Option B
      </label>
      <label className="block">
        <input
          type="radio"
          value="Option C"
          checked={selectedOption === 'Option C'}
          onChange={handleChange}
          className="mr-2"
        />
        Option C
      </label>
    </div>
  );
};

export default RadioButtons;
