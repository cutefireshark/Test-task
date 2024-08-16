
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNote } from '../redux/discountSlice';

const NoteField = () => {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.discount.note);

  const handleChange = (event) => {
    dispatch(setNote(event.target.value));
  };

  return (
    <div className="flex flex-col space-y-2">
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Enter your note"
        className="border p-2 rounded h-24"
      />
    </div>
  );
};

export default NoteField;
