import React,{useState, useEffect} from 'react'
import Board  from './Board'

function Game(){
    const [width, setWidth]=useState();
    const [height, setHeight]=useState();
    const [mines, setMines]=useState();
    const level={
        1:{
            width: 9,
            height:9,
            mines: 10
        },
        2:{
            width: 16,
            height:16,
            mines: 40
        },
        3:{
            width: 16,
            height:30,
            mines: 99
        }
    }
    
    const onChangeLevel=(value)=>{
            setWidth(level[value].width);
            setHeight(level[value].height);
            setMines(level[value].mines);
    }
    
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
        <select onChange={(e)=>onChangeLevel(e.target.value)} >
            <option value="1">9x9, 10 mines</option>
            <option value="2">16x16, 40 mines</option>
            <option value="3">16x30, 99mines</option>
        </select>
        <div>
               <input type="number" placeholder="Width" value={width}
                onChange={(e)=>onChangeWidth(e.target.value)}/>
                <input type="number" placeholder="Height" value={height}
                 onChange={(e)=>onChangeHeight(e.target.value)}/>
                <input type="number" placeholder="Mines" value={mines}
                 onChange={(e)=>onChangeMines(e.target.value)}/>
                <button value="Clear" onClick={onClear}>Clear</button>
            
        </div>
        <Board width={width} height={height} mines={mines}/>

        </div>
    )
}



export default Game;

