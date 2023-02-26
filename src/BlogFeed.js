import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import {Input} from "@mui/material";
import { TextareaAutosize } from "@mui/material";


function BlogFeed({blogPosts, onHandleNewPostState}) {

    const [newBlog, setNewBlog] = useState('')

    console.log(newBlog)
     function handleNewBlogPost(e) {
        e.preventDefault()
        fetch('https://t6nszj6p4f.execute-api.us-east-1.amazonaws.com/dev/items', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            price: new Date(),
            name: newBlog
        })
        })
        .then(resp => resp.json())
        .then(d => {
            onHandleNewPostState(d, newBlog, setNewBlog)
        })
        console.log(new Date())
    }

    // function handleNewBlogPost(e) {
    //     e.preventDefault()
    //     fetch('https://t6nszj6p4f.execute-api.us-east-1.amazonaws.com/dev/items', {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             date: new Date(),
    //             blog: newBlog, 
    //         })
    //     })
    //     .then(resp => resp.json())
    //     .then(d => console.log(d))
    // }

    console.log(blogPosts)
    return(
        <div>
            <div>
                <h3>What's on your mind?</h3>
                <form on onSubmit={handleNewBlogPost}>
                    <TextareaAutosize className="blog-input-box" value={newBlog}  onChange={(e) => setNewBlog(e.target.value)} />
                    <p>
                        <Button type="submit">Click here to post</Button>
                    </p>
                </form>
            </div>
            <div>
                {blogPosts.map((b) => {
                    return <div key={b.date}>{b.blog}</div>
                })}
            </div>
        </div>
    )
}

export default BlogFeed