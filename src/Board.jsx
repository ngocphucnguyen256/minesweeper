import React,{useState, useEffect} from 'react'

import Square from './Square';
import CreateBoard from './CreateBoard';


function Board({width, height, mines}) {

    const [grid, setGrid] = useState([]);
    const [mineLocation, setMineLocation] = useState([]);
    let flagCount=mines;

    //create freshBoard
    function freshBoard(){
        let newBoard=CreateBoard(10, 10,10);
        setGrid(newBoard.board);
        setMineLocation(newBoard.mineLocation);

    }
    useEffect(()=>{
        freshBoard();
    },[]);

    const updateFlag=()=>{
        flagCount--;
    }
    //gameOver
    const gameOver=()=>{
        console.log("game over");
        revealAll();
    }
    //revealAll
    const revealAll=()=>{
   
    }
    return(
        <div className="board">
            {
            grid.map(singleRow =>{
                return(
                    <div className="col">{singleRow.map(singleCol=>{
                        return <Square details={singleCol}
                         updateFlag={updateFlag} 
                        gameOver={gameOver}
                        flagCount={flagCount}
                        />
                    })}
                    </div>
                )
            })}
        </div>
    )


}

export default Board;