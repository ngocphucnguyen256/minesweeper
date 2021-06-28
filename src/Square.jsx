import React from 'react'
import flag from './flag.png';
import mine from './mine.jpg';

export default function Square({details, updateFlag,revealSquare, gameOver}){
    let style
    if(details.isRevealed && details.value===0){
        style={
            backgroundColor: '#0099cc'
        }
    }
    else if(details.isRevealed && details.value==="x"){
        style={
            backgroundImage: `url(${mine})`,
            backgroundSize: 'cover',
            backgroundColor: '#ff1a1a'
        }
    }
    else if (!details.isRevealed && details.isFlagged===true){
        style={
            backgroundImage: `url(${flag})`,
            backgroundSize: 'cover'
      

        }
    }
    else if(!details.isRevealed && !details.isFlagged){
        style={
            backgroundColor:  '#ffff66'
        }
    }
    else{
        style={
            backgroundColor:  '#66ff99'
        }
    }
     
  
    return(
        <div className="square"
         style={style} onClick={gameOver || details.isFlagged? undefined : ()=>revealSquare(details.x, details.y)} 
        onContextMenu={gameOver || details.isRevealed? (e)=>e.preventDefault() :(e)=>updateFlag(e,details.x,details.y)}>
            {details.isRevealed ? details.value===0? "":details.value: " "}
        </div>
    )



}