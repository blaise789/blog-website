import { useState,useEffect } from "react";

const useWindowsSize=()=>{

    const [windowSize,setWindowSize]=useState({
        width:undefined,
        height:undefined
        // which means they take defaults

    })
    useEffect(()=>{
        const handleResize=()=>{
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        handleResize();
        window.addEventListener("resize",handleResize)
        return ()=>{
    
            window.removeEventListener("resize",handleResize)
            
        }
    },[])
    return windowSize

}
export default useWindowsSize;