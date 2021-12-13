import React from 'react';
import SudokuBoard from './SudokuBoard';
import MenuButtons from './MenuButtons';
import '../css/App.css';

const App = () => {
  return (
    <div>
      <SudokuBoard />
      <MenuButtons />
    </div>
  );
};

export default App;
