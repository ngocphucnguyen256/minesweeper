import React,{useState, useEffect} from 'react'
import Board  from './Board'
import Square  from './Square'
import CreateBoard from './CreateBoard';


function Game(){
    //state
    // const [gameLevel, setGameLevel]=useState();
    const [width, setWidth]=useState();
    const [height, setHeight]=useState();
    const [mines, setMines]=useState();
    
    // const onChangeLevel=(value)=>{
    //     setGameLevel(value);
    // }
    const onChangeWidth=(value)=>{
        setWidth(value);
    }
    const onChangeHeight=(value)=>{
        setHeight(value);
    }
    const onChangeMines=(value)=>{
        setMines(value);
    }
    const onClear=()=>{
        setWidth();
        setHeight();
        setMines();
     }
    return(
        <div className="Game">
        {/* <select onChange={(e)=>onChangeLevel(e.target.value)} >
            <option value="1">9x9, 10 mines</option>
            <option value="2">16x16, 40 mines</option>
            <option value="3">16x30, 99mines</option>
        </select> */}
        <div>
               <input type="number" placeholder="Width" value={width}
                onChange={(e)=>onChangeWidth(e.target.value)}/>
                <input type="number" placeholder="Height" value={height}
                 onChange={(e)=>onChangeHeight(e.target.value)}/>
                <input type="number" placeholder="Mines" value={mines}
                 onChange={(e)=>onChangeMines(e.target.value)}/>
                <button value="Clear" onClick={onClear}/>
        </div>
        <Board width={width} height={height} mines={mines}/>

        </div>
    )
}



export default Game;

