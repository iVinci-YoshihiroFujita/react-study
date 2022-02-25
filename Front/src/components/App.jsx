import React, { useState } from 'react';
import SudokuBoard from './SudokuBoard';
import MenuButtons from './MenuButtons';
import '../css/App.css';
import classNames from 'classnames';

export const ThemeContext = React.createContext()

const App = () => {
  const [theme, setTheme] = useState({ isDark: false })

  // theme.isDarkを更新する
  const onChangeDarkLight = () => {
    setTheme({
      ...theme,
      isDark: !theme.isDark,
    });
  }
  
  return (
    <div className={classNames('app-main', {
      ['main-isdark']: theme.isDark,
    })}>
      <ThemeContext.Provider value={theme}>
        <section>
          <SudokuBoard />
        </section>
        <section>
          <MenuButtons
            theme={theme}
            onClickDarkLightButton={onChangeDarkLight}
          />
        </section>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
