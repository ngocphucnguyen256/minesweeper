import goTop from './goTop.png';
import React, {useState} from 'react';

const GoTop=()=>{
    const[visible, setVisible]= useState(false);

    const style={
            display: visible? 'block':'none',
            backgroundImage: `url(${goTop})`,
            backgroundSize: 'cover'
    }


    const toggleVisible=()=>{
        const scrolled= document.documentElement.scrollTop;
        if(scrolled>250){
            setVisible(true)
        }
        else if(scrolled<=250){
            setVisible(false)
        }
    }
    const scrollToTop=()=>{
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }
    window.addEventListener('scroll', toggleVisible);
    return(
 
            <button className="goTop" style={style} onClick={scrollToTop}/>
    
    )
}
export default GoTop;