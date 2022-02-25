import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/ModalContainer.css';

const propTypes = {
  children: PropTypes.element,
  position: PropTypes.string,
};

const ModalContainer = (props) => {
  const { position } = props;
  const isTop = position === 'top';
  const isCenter = position === 'center'
    || position === null || position === undefined;
  const isBottom = position === 'bottom';
  return (
    <div className='modal-wrapper'>
      <div className={classNames('modal', {
        ['top']: isTop,
        ['center']: isCenter,
        ['bottom']: isBottom,
      })}>
        { props.children }
      </div>
    </div>
  );
};

export default ModalContainer;