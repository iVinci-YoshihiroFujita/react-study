import React from 'react';
import classNames from 'classnames';
import DarkIcon from '../img/icon_toDark.svg';
import LightIcon from '../img/icon_toLight.svg';
import '../css/MenuButtons.css';

const MenuButtons = (props) => {
  const {
    theme,
    onClickDarkLightButton,
  } = props;

  return (
    <div className={'menu-buttons-wrapper'}>
      <button
        className={classNames('menu-button', {
          ['buttons-isdark']: theme.isDark
        })}
        onClick={onClickDarkLightButton}
      >
        <img
          src={theme.isDark ? LightIcon : DarkIcon}
        />
      </button>
    </div>
  );
};

export default MenuButtons;