import React from "react";
import { useState } from "react";


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
        .then(d => onHandleNewPostState(d, newBlog))
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
                <h3>Create new blog:</h3>
                <form on onSubmit={handleNewBlogPost}>
                    <input value={newBlog}  onChange={(e) => setNewBlog(e.target.value)} />
                    <p>
                        <button type="submit">Submit Blog</button>
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