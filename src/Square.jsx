import App from 'react';
import React, {useState} from 'react'

export default function Square({details, updateFlag,gameOver, flagCount}){
    const [label, setLabel]= useState()
    const handleClick=()=>{
        setLabel(details.value);
        if(details.value==="x"){
            //gameOver
            gameOver();
        }
        else{
            details.isRevealed=true;
        }
    }
    const handleContextClick=(e)=>{
        e.preventDefault();
        if (flagCount>0){
        setLabel("flag");
        updateFlag();
        }
        else{
            //no flag left
        }
    }
  
    return(
        <div onClick={handleClick} onContextMenu={(e)=>handleContextClick(e)}>
            {label}
        </div>
    )



}