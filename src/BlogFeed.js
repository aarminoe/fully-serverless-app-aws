import React from "react";
import { useState } from "react";


function BlogFeed({blogPosts}) {

    const [newBlog, setNewBlog] = useState('')

    console.log(newBlog)

    function handleNewBlogPost() {
        
    }

    return(
        <div>
            <div>
                <h3>Create new blog:</h3>
                <form on onSubmit={handleNewBlogPost}>
                    <textarea value={newBlog}  onChange={(e) => setNewBlog(e.target.value)} rows="15" cols="100"/>
                    <p>
                        <button type="submit">Submit Blog</button>
                    </p>
                </form>
            </div>

            <div>
                {blogPosts.map((b) => {
                    return <div>hi</div>
                })}
            </div>
        </div>
    )
}

export default BlogFeed