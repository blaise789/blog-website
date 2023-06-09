import  { useEffect, useState } from 'react'
import axios from 'axios'

const useAxiosFetch = (dataUrl) => {
    const [data,setData]=useState([])
const [fetchError,setFetchError]=useState(null)
const [isLoading,setIsLoading] =useState(false)
useEffect(()=>{
    let isMounted=true
    const source=axios.CancelToken.source()
    // this source will break the request
//   empty dom
    // to mean that new instance of react is created and inserted into dom
   const fetchData=async  (url)=>{
 setIsLoading(true)
    // this allows it to first finish loading from the api
    try{
const response =await axios.get(url,{cancelToken:source.token})
if(isMounted){
    setData(response.data)
}
}
catch(err){
    if(isMounted){
        setFetchError(err.message)
       setData([])
    }
}
finally{
    isMounted && setIsLoading(false)
}


   }
fetchData(dataUrl)

   const cleanUp=()=>{
    isMounted=false;
    source.cancel();
    
   }
   return cleanUp
//    this means that no longer data got to be inserted into the dom
},[dataUrl])
// this will the depend on url 
  return { data, fetchError,isLoading}
}

export default useAxiosFetch