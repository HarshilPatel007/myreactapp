// example of consuming API data

import React, { useState, useEffect } from 'react';


export const PostList = () => {

    const [getPost, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((responce) => responce.json())
            .then((data) => setPost(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <ul>
                {
                    getPost.map((post, id) => {
                        return <li key={id}>{post.title}</li>
                    })
                }
            </ul>
        </div>
    )
}
// 1.30.40
