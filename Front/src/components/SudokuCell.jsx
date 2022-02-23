import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/SudokuCell.css';

const propTypes = {
  blockIdx: PropTypes.number,
  blockCellIdx: PropTypes.number,
  data: PropTypes.object,
  onChangeCellInput: PropTypes.func,
};

const SudokuCell = (props) => {
  const {
    blockIdx,
    blockCellIdx,
    data,
    onChangeCellInput,
  } = props;

  const option = data.fixed
    ? (<option value={data.value}>{data.value}</option>)
    : ([...Array(10)].map((_, idx) => {
      return(
        <option
          key={`option_${idx}`}
          value={idx > 0 ? idx : ''}
        >
          {idx === 0 ? "" : idx}
        </option>
      );
    }));

  return (
    <select
      className={classNames('sudoku_cell_select', {
        ['sudoku_cell_select__fixed']: data.fixed,
      })}
      onChange={event => {
        onChangeCellInput(event, blockIdx, blockCellIdx)
      }}
      disabled={data.fixed}
    >
      { option }
    </select>
  );
};

SudokuCell.propTypes = propTypes;

export default SudokuCell;