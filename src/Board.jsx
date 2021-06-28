import React,{useState, useEffect} from 'react'
import Reveal from './Reveal'
import Square from './Square';
import CreateBoard from './CreateBoard';


function Board({width, height, mines}) {
    const [grid, setGrid] = useState([]);
    const [mineLocation, setMineLocation] = useState([]);
    const [nonMineCount, setNonMineCount] = useState(0);
    const [flagLeft, setFlagLeft] = useState();
    const [gameOver, setGameOver] = useState(false)
    const [winOrLose, setWinOrLose] = useState();
   
    //create freshBoard
    function freshBoard(){
        let newBoard=CreateBoard(width, height,mines);
        setGrid(newBoard.board);
        setMineLocation(newBoard.mineLocation);
        setNonMineCount(width*height-mines);
        setFlagLeft(mines);
        setGameOver(false);
        setWinOrLose();
    }

    useEffect(()=>{
        freshBoard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(()=>{
        freshBoard();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[width, height, mines])
    //win or lose
    useEffect(()=>{
        if(nonMineCount===0 && flagLeft===0){
            setWinOrLose("You win!");
        }
    },[nonMineCount,flagLeft])

    const updateFlag=(e,x,y)=>{
        e.preventDefault();
        let newGrid= JSON.parse(JSON.stringify(grid));
        if(0<flagLeft && grid[x][y].isFlagged===false){
            setFlagLeft(prevFlagLeft=>prevFlagLeft-1);
            newGrid[x][y].isFlagged=!grid[x][y].isFlagged;
            setGrid(newGrid);
        }
        if(0<=flagLeft && grid[x][y].isFlagged===true){
            setFlagLeft(prevFlagLeft=>prevFlagLeft+1);
              newGrid[x][y].isFlagged=!grid[x][y].isFlagged;
              setGrid(newGrid);
        }
    
       
    }

    const revealSquare=(x,y)=>{
        let newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="x"){
              for(let i=0; i<mineLocation.length; i++){
                  newGrid[mineLocation[i][0]][mineLocation[i][1]].isRevealed=true;
              }
             setGameOver(true);
             setWinOrLose("You clicked on mine!");
            setGrid(newGrid);
        }
        else{
            let revealedBoard = Reveal(newGrid, x,y,nonMineCount);
            setGrid(revealedBoard.arr);
            setNonMineCount(revealedBoard.newNonMines);
            setFlagLeft(prevFlagLeft=>prevFlagLeft+revealedBoard.flagRestored);
        }
    }
    return(
        <div className="board-container">
            <div className="flag-left">Flag left: {flagLeft}</div>
        
           <div className="board">
           {
            grid.map((singleRow,index1) =>{
                return(
                    <div className="col" key={index1}>
                        {singleRow.map((singleCol,index2) =>{
                        return <Square 
                        details={singleCol}
                        key={index2}
                         updateFlag={updateFlag} 
                        revealSquare={revealSquare}
                        onContextMenu={updateFlag}
                        gameOver={gameOver}
 
                        />
                    })}
                    </div>
                )
            })}
           </div>
           <button className="play-again" onClick={freshBoard}>Play Again</button>
           <div className="winOrLose">{winOrLose}</div>
        </div>
    )


}

export default Board;