// // we need first to set Up use state
//  import { useState,useEffect } from "react";

//  import axios from 'axios'
// import useAxiosFetch from "../src/hooks/useAxiosFetch";


//  const useAxiosFetch=(dataUrl)=>{
// const [isLoading,setIsLoading]=useState(false)
// const [data,setData]=useState(null)
// const [fetchError,setFetchError]=useState(null)
// useEffect(()=>{
//     let isMounted=true
//     // w e have now connectinosn
// const fetchData=()=>{
//     setIsLoading(true)
// // it is loading as are waiting for the repsonse to end loading
  
//   const source=axios.CancelToken.source()

//     try{
//         const response=await axios.get(url,{cancelToken:token.source})
        

//         if(isMounted){
//             setData(response.data)
//             setFetchError(null)
//         }
        
//         catch(err){
//             if(isMounted){
//                 setData([])
//                 setFetchError(err.message)
//             }
//  finally{

//     isMounted && setTimeout(()=>setIsLoading(false),2000)
// // if there  we have got an error or not we have ot wait for two seconds then we set is Loading ro false
//  }
// //  after use Effect we can clean up
// isMounted=false
// source.cancel()
 

//         }
        

// }



// })





// }
