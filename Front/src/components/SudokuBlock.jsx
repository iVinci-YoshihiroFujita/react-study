import React from 'react';
import PropTypes from 'prop-types';
import SudokuCell from './SudokuCell';
import '../css/SudokuBlock.css';

const propTypes = {
  blockIdx: PropTypes.number,
  block: PropTypes.array,
  onChangeCellInput: PropTypes.func,
};

const SudokuBlock = (props) => {
  const {
    blockIdx,
    block,
    onChangeCellInput
  } = props;

  const rows = block.reduce((acc, data, idx) => {
    const rowIdx = Math.floor(idx / 3);
    acc[rowIdx].push(
      <SudokuCell
        key={`sudokucell_${blockIdx}_${idx}`}
        blockIdx={blockIdx}
        blockCellIdx={idx}
        data={data}
        onChangeCellInput={onChangeCellInput}
      />
    );
    return acc;
  }, [[], [], []]);
  const content = rows.map((row, idx) => (
    <div key={`cellrow_${blockIdx}_${idx}`}>
      {row}
    </div>
  ));
  return (
    <div className={'sudoku_block'}>
      {content}
    </div>
  );
};

SudokuBlock.propTypes = propTypes;

export default SudokuBlock;
