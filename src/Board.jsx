import React,{useState, useEffect} from 'react'
import Reveal from './Reveal'
import Square from './Square';
import CreateBoard from './CreateBoard';


function Board({width, height, mines}) {

    const [grid, setGrid] = useState([]);
    const [mineLocation, setMineLocation] = useState([]);
    const [nonMineCount, setNonMineCount] = useState(0);

    //create freshBoard
    function freshBoard(){
        let newBoard=CreateBoard(10, 10,10);
        setGrid(newBoard.board);
        setMineLocation(newBoard.mineLocation);
        setNonMineCount(10*10-20);
    }
    useEffect(()=>{
        freshBoard();
    },[]);


    const updateFlag=(e,x,y)=>{
        e.preventDefault();
        //deep copy
        let newGrid= JSON.parse(JSON.stringify(grid));
        newGrid[x][y].isFlagged=true;
        setGrid(newGrid);
    }

    const revealSquare=(x,y)=>{
        let newGrid=JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="x"){
              for(let i=0; i<mineLocation.length; i++){
                  newGrid[mineLocation[i][0]][mineLocation[i][1]].isRevealed=true;
              }
            setGrid(newGrid);
        }
        else{
            let revealedBoard = Reveal(newGrid, x,y,nonMineCount);
            setGrid(revealedBoard.arr);
            setNonMineCount(revealedBoard.newNonMines);
        }
    }
    return(
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
                        />
                    })}
                    </div>
                )
            })}
        </div>
    )


}

export default Board;