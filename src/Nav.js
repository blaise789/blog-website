import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import DataContext from './context/DataContext'


const Nav = () => {
    
    const {search,setSearch}=useContext(DataContext)
 
    return (
    

 <nav className='Nav'>
<form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor="search">
        Search Posts
    </label>
    <input 
    
    type="text" 
    id='search'
    placeholder='Search Posts'
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />
    <ul>
        <li><NavLink to="/">Home </NavLink></li>
        <li><NavLink to="/post">Post</NavLink></li>
        <li><NavLink to="/about">About </NavLink></li>
    
        

    </ul>
    
    
    {/* for screen readers  */}
    
            </form>
        </nav>
        
  )
}

export default Nav