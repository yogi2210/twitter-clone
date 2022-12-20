import React from 'react'
import { Post as IPost} from './main'

interface Props {
    post : IPost
}

export const Post = (props : Props) => {
    const { post } = props
  return (
    <div style={{color: "white"}} >
        <div className="title">
            <h2>{post.title}</h2>
        </div>
        <div className="body">
            <p>{post.description}</p>
        </div>
        <div className="footer">
            <p>{post.username}</p>
            <button> &#128077 </button>
        </div>
    </div>
  )
}
