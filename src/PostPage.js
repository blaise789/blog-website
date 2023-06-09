import React, { useContext } from 'react'
import api from './api/posts'
import { useNavigate } from 'react-router-dom'
import {useParams,NavLink} from "react-router-dom"
import DataContext from './context/DataContext'
const PostPage = () => {
 const {posts,setPosts}=useContext(DataContext)
  const {id}=useParams()
  const post=posts.find(post=>(post.id).toString()===id )
  const history=useNavigate()  

  const handleDelete= async ()=>{
try{
  await api.delete(`/${id}`);
  const postsList=posts.filter(post=>post.id !==id)
  setPosts(postsList)
  history('/')
}
catch(err){
  console.log(`Error:${err.message}`)

}

  }
  // or post.id==id
  // because we described in it in our routes 
  return (


    <main className='PostPage'>
       <article className='post'>
      {post &&
      
     <>
      <h1>{post.title}</h1>
      <p className='postDate'>{post.dateTime}</p>
      <p  className='postBody'>{post.body}</p>


 <NavLink to={`/edit/${post.id}`}   ><button className="editButton">Edit Post</button></NavLink>
      <button className='deleteButton' onClick={()=>{ handleDelete(post.id)}}>Delete Post</button>

      </>
      }
      {!post &&

      <>
      <h2>Post not found</h2>

      <p>Well, that's disappointing</p>
      <p>
        <NavLink to='/'>Visit Our home Page</NavLink>
      </p>

      </>
      }

</article>
      
     
        </main>
  ) 
}

export default PostPage