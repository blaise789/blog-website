import {NavLink} from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article className='post'>
<NavLink to={`/post/${post.id}`}>
    
    <h2>{post.title
}</h2>
<p className='postDate'>{post.datetime}  </p>

</NavLink>
<p className='postBody'>
    {
     (post.body).length<=25 ? post.body
     
     :`${(post.body).slice(0,25)}...`  
    //  this will break the array  from 0 ot 25 characters
  // and the three dots will make the exceeding not to be displayed

    }
</p>

    </article>
  )
}

export default Post