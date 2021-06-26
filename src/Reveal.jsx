 const Reveal=(arr,x,y,newNonMines)=>{
    const rowLimit=arr.length-1;
    const colLimit=arr[0].length-1;
    let reavealList=[];
    reavealList.push(arr[x][y]);
    while(reavealList.length!==0){
        let square=reavealList.pop();
        let i=square.x;
        let j=square.y;
        if(!square.isRevealed){
            newNonMines--;
            square.isRevealed=true;
        }
        if(square.value!==0){
            break;
        }
        //reveal blank square adjacent 
         //top left   
        if(i>0 && j>0 && arr[i-1][j-1].value===0 && 
            !arr[i-1][j-1].isRevealed){
                reavealList.push(arr[i-1][j-1]);
            }
        //top
        if(j>0 && arr[i][j-1].value===0 && 
            !arr[i][j-1].isRevealed){
                reavealList.push(arr[i][j-1]);
            }
        //top right
        if(i<rowLimit && j>0 && arr[i+1][j-1].value===0 && 
            !arr[i+1][j-1].isRevealed){
                reavealList.push(arr[i+1][j-1]);
        }
        //left
        if(i>0 && arr[i-1][j].value===0 && 
            !arr[i-1][j].isRevealed){
                reavealList.push(arr[i-1][j]);
            }
        //right
        if(i<rowLimit && arr[i+1][j].value===0 && 
            !arr[i+1][j].isRevealed){
                reavealList.push(arr[i+1][j]);
            }
        //bottom left
        if(i>0 && j<colLimit && arr[i-1][j+1].value===0 && 
            !arr[i-1][j+1].isRevealed){
                reavealList.push(arr[i-1][j+1]);
            }
        //bottom 
        if(j<colLimit && arr[i][j+1].value===0 && 
            !arr[i][j+1].isRevealed){
                reavealList.push(arr[i][j+1]);
            }
        //bottom right
        if(i<rowLimit && j<colLimit && arr[i+1][j+1].value===0 && 
            !arr[i+1][j+1].isRevealed){
                reavealList.push(arr[i+1][j+1]);
            }
        //reveal square not blank adjacent to those blank square
        //top left
        if(i>0 && j>0&& !arr[i-1][j-1].isRevealed){
                arr[i-1][j-1].isRevealed=true;
                newNonMines--;
            }
           //top
           if(j>0 && 
            !arr[i][j-1].isRevealed){
                arr[i][j-1].isRevealed=true;
                newNonMines--;

            }
        //top right
        if(i<rowLimit && j>0  && 
            !arr[i+1][j-1].isRevealed){
            arr[i+1][j-1].isRevealed=true;
            newNonMines--;

        }
        //left
        if(i>0 &&
            !arr[i-1][j].isRevealed){
             arr[i-1][j].isRevealed=true;
             newNonMines--;

            }
        //right
        if(i<rowLimit  && 
            !arr[i+1][j].isRevealed){
             arr[i+1][j].isRevealed=true;
             newNonMines--;

            }
        //bottom left
        if(i>0 && j<colLimit &&
            !arr[i-1][j+1].isRevealed){
             arr[i-1][j+1].isRevealed=true;
             newNonMines--;

            }
        //bottom 
        if(j<colLimit &&  
            !arr[i][j+1].isRevealed){
                arr[i][j+1].isRevealed=true;
                newNonMines--;

            }
        //bottom right
        if(i<rowLimit && j<colLimit &&
            !arr[i+1][j+1].isRevealed){
              arr[i+1][j+1].isRevealed=true;
              newNonMines--;

            }

    }
    return {arr, newNonMines}
}

export default Reveal;