import React, {
  useEffect, useState,
} from 'react';
import SudokuBlock from './SudokuBlock';
import ModalContainer from './ModalContainer';
import Spinner from '../img/spinner.svg';
import getSudokuDataService from '../service/getSudokuDataService';
import '../css/SudokuBoard.css';

// APIから受け取った数独の文字列を使いやすい形にして各ブロックに展開する
// const sudokuData = '...465......2..7..9....76..6....234..15...2.9.4...8........6..17.1...9.3..9...5..';
//  ... 465 ...
//  ... 2.. 7..
//  9.. ..7 6..
//  6.. ..2 34.
//  .15 ... 2.9
//  .4. ..8 ...
//  ... ..6 ..1
//  7.1 ... 9.3
//  ..9 ... 5..

const SudokuBoard = () => {
  // 各ブロックデータの配列。各要素は{ value: x, fixed: true/false }。APIから渡された初期値はfixed: true
  const [blocks, setBlocks] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  // APIから受け取った数独のデータを良い感じに並び変える
  useEffect(() => {
    setIsFetching(true)
    // 数独ゲームデータ取得
    getSudokuDataService()
      .then(svcResult => {
        const sudokuData = svcResult.data;
        setBlocks(sudokuData);
      })
      .then(() => setIsFetching(false));
  }, []);

  const onChangeCellInput = (event, blockIdx, blockCellIdx) => {
    event.stopPropagation();
    const value = event.target.value;
    const newBlocks = blocks.slice();
    newBlocks[blockIdx][blockCellIdx] = { value, fixed: false };
    setBlocks(newBlocks);
  };

  // SudokuBlockコンポーネントに展開
  const rows = blocks.reduce((acc, block, idx) => {
    const rowIdx = Math.floor(idx / 3);
    acc[rowIdx].push(
      <SudokuBlock
        key={`sudokublock_${idx}`}
        blockIdx={idx}
        block={block}
        onChangeCellInput={onChangeCellInput}
      />
    );
    return acc;
  }, [[], [], []]);

  // SudokuBlockコンポーネントを各行に3つずつ並べる
  const content = rows.map((row, idx) => (
    <div
      key={`bulockrow_${idx}`}
      className={'board_row'}
    >
      {row}
    </div>
  ));

  return (
    <>
      {isFetching &&
        <ModalContainer
          position='center'
        >
          <img
            className={'spinner'}
            src={Spinner}
          />
        </ModalContainer>
      }
      { content }
    </>
  );
};

export default SudokuBoard;