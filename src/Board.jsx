import React,{useState, useEffect} from 'react'

import Square from './Square';
import CreateBoard from './CreateBoard';


function Board({width, height, mines}) {

    const [grid, setGrid] = useState([]);


//create freshBoard
    useEffect(()=>{
        function freshBoard(){
            const newBoard=CreateBoard(width, height,mines);
            setGrid(newBoard);
        }
        freshBoard();
        console.log(grid);
    },[]);

    const updateFlag=(e)=>{
        e.preventDefault();
        console.log("Right Click")
    }

    return(
        <div>

        </div>
        // <div className="Board">
        //     {grid.map(singleRow =>{
        //         return(
        //             <div>{singleRow.map(singleCol=>{
        //                 return <Square details={singleCol} updateFlag={updateFlag}/>
        //             })}
        //             </div>
        //         )
        //     })}
        // </div>
    )


}

export default Board;