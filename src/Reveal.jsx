 const Reveal=(arr,x,y,newNonMines)=>{
    const rowLimit=arr.length-1;
    const colLimit=arr[0].length-1;
    let revealList=[];
    let flagRestored=0;
    revealList.push(arr[x][y]);
    while(revealList.length!==0){
        let square=revealList.pop();
        let i=square.x;
        let j=square.y;
        if(!square.isRevealed){
            newNonMines--;
            square.isRevealed=true;
        }
        if(square.value!==0){
            break;
        }
         //top left   
        if(i>0 && j>0 && arr[i-1][j-1].value===0 && 
            !arr[i-1][j-1].isRevealed){
                revealList.push(arr[i-1][j-1]);
            }
        //top
        if(j>0 && arr[i][j-1].value===0 && 
            !arr[i][j-1].isRevealed){
                revealList.push(arr[i][j-1]);
            }
        //top right
        if(i<rowLimit && j>0 && arr[i+1][j-1].value===0 && 
            !arr[i+1][j-1].isRevealed){
                revealList.push(arr[i+1][j-1]);
        }
        //left
        if(i>0 && arr[i-1][j].value===0 && 
            !arr[i-1][j].isRevealed){
                revealList.push(arr[i-1][j]);
            }
        //right
        if(i<rowLimit && arr[i+1][j].value===0 && 
            !arr[i+1][j].isRevealed){
                revealList.push(arr[i+1][j]);
            }
        //bottom left
        if(i>0 && j<colLimit && arr[i-1][j+1].value===0 && 
            !arr[i-1][j+1].isRevealed){
                revealList.push(arr[i-1][j+1]);
            }
        //bottom 
        if(j<colLimit && arr[i][j+1].value===0 && 
            !arr[i][j+1].isRevealed){
                revealList.push(arr[i][j+1]);
            }
        //bottom right
        if(i<rowLimit && j<colLimit && arr[i+1][j+1].value===0 && 
            !arr[i+1][j+1].isRevealed){
                revealList.push(arr[i+1][j+1]);
            }
        //start reveal
        //top left
        if(i>0 && j>0&& !arr[i-1][j-1].isRevealed){
                arr[i-1][j-1].isRevealed=true;
                newNonMines--;
                if( arr[i-1][j-1].isFlagged){
                    flagRestored++;
                }
            }
           //top
           if(j>0 && 
            !arr[i][j-1].isRevealed){
                arr[i][j-1].isRevealed=true;
                newNonMines--;
                if( arr[i][j-1].isFlagged){
                    flagRestored++;
                }
            }
        //top right
        if(i<rowLimit && j>0  && 
            !arr[i+1][j-1].isRevealed){
            arr[i+1][j-1].isRevealed=true;
            newNonMines--;
            if( arr[i+1][j-1].isFlagged){
                flagRestored++;
            }
        }
        //left
        if(i>0 &&
            !arr[i-1][j].isRevealed){
             arr[i-1][j].isRevealed=true;
             newNonMines--;
             if(  arr[i-1][j].isFlagged){
                flagRestored++;
            }
            }
        //right
        if(i<rowLimit  && 
            !arr[i+1][j].isRevealed){
             arr[i+1][j].isRevealed=true;
             newNonMines--;
             if(  arr[i+1][j].isFlagged){
                flagRestored++;
            }
            }
        //bottom left
        if(i>0 && j<colLimit &&
            !arr[i-1][j+1].isRevealed){
             arr[i-1][j+1].isRevealed=true;
             newNonMines--;
             if(   arr[i-1][j+1].isFlagged){
                flagRestored++;
            }
            }
        //bottom 
        if(j<colLimit &&  
            !arr[i][j+1].isRevealed){
                arr[i][j+1].isRevealed=true;
                newNonMines--;
                if(  arr[i][j+1].isFlagged){
                    flagRestored++;
                }
            }
        //bottom right
        if(i<rowLimit && j<colLimit &&
            !arr[i+1][j+1].isRevealed){
              arr[i+1][j+1].isRevealed=true;
              newNonMines--;
              if(  arr[i+1][j+1].isFlagged){
                flagRestored++;
            }
            }

    }
    return {arr, newNonMines, flagRestored}
}

export default Reveal;