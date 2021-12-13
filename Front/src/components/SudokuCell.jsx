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

  return (
    <input
      className={classNames('sudoku_cell_input', {
        ['sudoku_cell_input__fixed']: data.fixed,
      })}
      type="number"
      value={data.value}
      min="1"
      max="9"
      step="1"
      readOnly={data.fixed}
      onChange={(event) =>
        onChangeCellInput(event, blockIdx, blockCellIdx)}
    />
  );
};

SudokuCell.propTypes = propTypes;

export default SudokuCell;