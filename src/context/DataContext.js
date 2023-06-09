import { createContext,useState,useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext =createContext({

})

// this creates context that can be read or  provided

export const DataProvider=({children})=>{
    
  const [posts, setPosts] = useState([])
  const [search, setSearch]= useState('');
  const [searchResults, setSearchResults] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');


  useEffect(() => {
      setPosts(data);
  }, [data])
// the first userEffect is dealing with gettting the data on the loading
  useEffect(() => {
      const filteredResults = posts.filter((post) =>
          ((post.body).toLowerCase()).includes(search.toLowerCase())
          || ((post.title).toLowerCase()).includes(search.toLowerCase()));

      setSearchResults(filteredResults.reverse());
  }, [posts, search])
   

// this is responsible for filtering out the posts and sets it to search results
    return(
        <DataContext.Provider value={{
search,setSearch,searchResults,fetchError,
isLoading,posts,setPosts

        }}>
            {children} 
            </DataContext.Provider>

    ) 
  

}
export default DataContext