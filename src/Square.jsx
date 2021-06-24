import App from 'react';

export default function Square({details, updateFlag}){
    const handleClick=()=>{
        console.log(details);
    }
    return(
        <div onClick={handleClick} onContextMenu={(e)=>updateFlag(e)}>
            {details.value}
        </div>
    )



}