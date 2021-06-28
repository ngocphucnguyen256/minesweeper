import React, { useState, useEffect } from "react";
import {Select} from 'antd';
import Board from "./Board";
import GoTop from './GoTop'
function Game() {
  //states
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [mines, setMines] = useState();

  //default board value
  useEffect(() => {
    setWidth(9);
    setHeight(9);
    setMines(10);
  }, []);
  //define levels
  const level = {
    1: {
      width: 9,
      height: 9,
      mines: 10,
    },
    2: {
      width: 16,
      height: 16,
      mines: 40,
    },
    3: {
      width: 16,
      height: 30,
      mines: 99,
    },
  };
  //select level
  const onChangeLevel = (value) => {
    setWidth(level[value].width);
    setHeight(level[value].height);
    setMines(level[value].mines);
  };

  //define input variables
  let inputWidth;
  let inputHeight;
  let inputMines;
  const onChangeInputWidth = (value) => {
    inputWidth = value;
  };
  const onChangeInputHeight = (value) => {
    inputHeight = value;
  };
  const onChangeInputMines = (value) => {
    inputMines = value;
  };

  const onClearClick = () => {
    inputWidth = 0;
    inputHeight = 0;
    inputMines = 0;
  };
  const onStartClick = () => {
    if (
      inputWidth > 0 &&
      inputHeight > 0 &&
      inputMines > 0 &&
      inputMines < inputWidth * inputHeight
    ) {
      setWidth(inputWidth);
      setHeight(inputHeight);
      setMines(inputMines);
    }
  };
  return (
    <div className="Game">
      <h1>Minesweeper</h1>

      <div>
        <form className="input-form">
          <h3>Select a game mode</h3>
          <select onChange={(e) => onChangeLevel(e.target.value)}>
            <option value="1">9x9, 10 mines</option>
            <option value="2">16x16, 40 mines</option>
            <option value="3">16x30, 99mines</option>
          </select>
          <h3>Or custom a game mode</h3>
          <div className="custom-input-container">
          <input
            type="number"
            placeholder="Width"
            onChange={(e) => onChangeInputWidth(e.target.value)}
          />
          <input
            type="number"
            placeholder="Height"
            onChange={(e) => onChangeInputHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Mines"
            onChange={(e) => onChangeInputMines(e.target.value)}
          />
          </div>
          <button className="clear-button" type="reset" onClick={onClearClick}>
            Clear
          </button>
        </form>
        <button className="start-button" value="Start" onClick={onStartClick}>
          Start
        </button>
      </div>
      <div className="board-container">
      <Board width={width} height={height} mines={mines} />
      </div>
      <GoTop/>
    </div>
  );
}

export default Game;
