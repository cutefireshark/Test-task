
import React from 'react';
import RadioButtons from './components/RadioButton';
import DiscountCode from './components/DiscountCode';
import NoteField from './components/NoteField';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Discount Application</h1>
      <div className="space-y-4">
        <RadioButtons />
        <DiscountCode />
        <NoteField />
      </div>
    </div>
  );
};

export default App;
