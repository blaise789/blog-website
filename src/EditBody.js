import React from 'react'
import { useState,useEffect,useContext } from 'react'
import api from './api/posts'
import { format } from 'date-fns'
import { useParams,NavLink,useNavigate} from 'react-router-dom'
import DataContext from './context/DataContext'
const EditBody = () => {
  const {id}=useParams()
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const {posts,setPosts}=useContext(DataContext)
  const post=posts.find(post=>(post.id).toString() === id)

   const history=useNavigate()
   useEffect(()=>{
    if(post){
      setEditTitle(post.title)
      setEditBody(post.body)
    }
   },[post,setEditTitle,setEditBody])
//    any changes we make this will be executed
// and if it is empty it is done once
   const handleEdit=async (id)=>{

    const dateTime=format(new Date(),'MMMM  dd,yyyy pp')
   const updatedPost={id,title:editTitle,body:editBody,dateTime}
 
   try {
        const response=await api.put(`/${id}`,updatedPost)
        setPosts(posts.map(post => post.id===id? {...response.data}:post))
         setEditBody('')
         setEditTitle('')
         history('/')
        } 
       catch(err){
console.log(`Error: ${err.message}`)
       }
   }
  return (
    <main className="NewPost">
    {editTitle &&
        <>
            <h2>Edit Post</h2>
            <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                />
                <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
            </form>
        </>
    }
    {!editTitle && 
        <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
                <NavLink to='/'>Visit Our Homepage</NavLink>
            </p>
        </>
    }
</main>
  )
}

export default EditBody