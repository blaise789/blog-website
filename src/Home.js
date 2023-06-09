import { useContext } from 'react'
import DataContext from './context/DataContext'
import Feed from './Feed'
// this one is used to be consume the context
//  to have  acces we use DataContext

const Home = () => {
  const {searchResults,fetchError,isLoading}=useContext(DataContext)

  // DataContext exported by the provider
  return (
    <main className='Home'>
      {isLoading && <p className="statusMsg">Loading...</p> }
     {!isLoading && fetchError && <p className='statusMsg'> No posts to display</p>}
   {!isLoading && !fetchError && (searchResults.length?<Feed posts={searchResults}/>:<p className='statusMsg'>no posts to display</p>) }
   
    </main>
  )
}

export default Home