export default function CreateBoard (row, col, mines){
    let board =[];
    let mineLocation=[];



//create empty board
    for (let x=0; x<row; x++){
        let subCol =[];
        for (let y=0; y<col; y++){
            subCol.push({
                value:0,
                isRevealed:false,
                x:x,
                y:y,
                isFlagged:false
            })
        }
        board.push(subCol);
    }
  //random mines
  function random(min=0, max){
        return Math.floor(Math.random()*(max-min+1)+min);
  }

  let mineCount=0;

  while(mineCount<mines){
        //random location
        let x=random(0, row-1);
        let y=random(0,col-1);
        //place mine at location
        if(board[x][y].value===0){
            board[x][y].value="x";
            mineLocation.push([x,y]);
            mineCount++;
        }
  } 
  
  //increase value of square
  for (let i=0; i<row;i++){
      for(let j=0; j<col; j++){
          //skip if square have mine
          if(board[i][j].value==="x"){
              continue;
          }
          //top left
          if(i>0 && j>0 && board[i-1][j-1].value==="x"){
            board[i][j].value++;
          }
          //top
          if(j>0 && board[i][j-1].value==="x"){
            board[i][j].value++;
          }
          //top right
          if(i<row-1 && j>0 && board[i+1][j-1].value==="x"){
            board[i][j].value++;

          }
          //left
          if(i>0 && board[i-1][j].value==="x"){
            board[i][j].value++;          
         }
         //right
         if(i<row-1 &&board[i+1][j].value==="x"){
            board[i][j].value++;

         }
         //bottom left
         if(i>0 && j<col-1 && board[i-1][j+1].value==="x"){
            board[i][j].value++;
         }
         //bottom
         if( j<col-1 && board[i][j+1].value==="x"){
            board[i][j].value++;
         }
         //bottom right
         if(i<row-1 &&  j<col-1 && board[i+1][j+1].value==="x"){
            board[i][j].value++;

         }
  } 
}
        return {board, mineLocation};
}