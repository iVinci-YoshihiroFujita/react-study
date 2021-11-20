import React from 'react';
import '../css/App.css';
import imgFunReact from '../img/fun_react.png';

const App = () => {
  return (
    <div className={'app_wrapper'}>
      <h1>Hello React with Webpack</h1>
      <img
        src={imgFunReact}
        alt=""
      />
      <h2>Done is Better than Perfect.</h2>
    </div>
  );
};

export default App;
