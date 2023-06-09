import { useContext, useState } from 'react'
import DataContext from './context/DataContext'
import api from './api/posts'
import { format } from 'date-fns'
import {useNavigate} from 'react-router-dom'

const NewPost = () => {
  const [postTitle,setPostTitle]=useState('')
  const [postBody,setPostBody]=useState('')
  const {posts,setPosts}=useContext(DataContext)
  const history=useNavigate()
 const handleSubmit=async (e)=>{
e.preventDefault();
const id=posts.length?posts[posts.length-1].id +1:1

const dateTime=format(new Date(),'MMMM dd, yyyy pp')
const newPost={id,title:postTitle,dateTime,body:postBody}
 try {
 const response=await  api.post('/',newPost)
 const allposts=  [...posts,response.data]
 setPosts(allposts)
 setPostTitle('')
 setPostBody('')
 history('/');

}
catch(err){
  console.log(`Error:${err.message}`)
}

 }
  return (

    
    <main className='NewPost'>
        
        <h2>NewPost
</h2>
<form action="
"
className='newPostForm'
onSubmit={handleSubmit} 
><label htmlFor="postTitle">

  Title:
</label>
<input 
 id='postTitle'
required
type="text"
value={postTitle}
onChange={(e)=>{setPostTitle(e.target.value)}}

/>

<label htmlFor="postBody">

Post:
</label>
<textarea 
name=""

id="postBody" 

required
value={postBody}
onChange={(e)=>{
setPostBody(e.target.value
  )

}}
></textarea>

<button type='submit'>Submit</button>
</form>

    </main>
  )
}

export default NewPost