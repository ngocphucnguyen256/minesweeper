import App from 'react';
import React, {useState} from 'react'
import flag from './flag.png'

export default function Square({details, updateFlag,revealSquare, gameOver}){
    let style
    if(details.isRevealed && details.value===0){
        style={
            backgroundColor: '#0099cc'
        }
    }
    else if(details.isRevealed && details.value==="x"){
        style={
            backgroundColor: '#ff1a1a'
        }
    }
    else if (!details.isRevealed && details.isFlagged===true){
        style={
            backgroundImage: `url(${flag})`,
            backgroundSize: 'cover',
            backgroundColor:'#ca994e'

        }
    }
    else{
        style={
            backgroundColor:  '#e0e085'
        }
    }
     
  
    return(
        <div
         style={style} onClick={gameOver? false : ()=>revealSquare(details.x, details.y)} 
        onContextMenu={gameOver? false :(e)=>updateFlag(e,details.x,details.y)}>
            {details.isRevealed ? details.value===0? "":details.value: " "}
        </div>
    )



}