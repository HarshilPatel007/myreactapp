// example of send POST data using API

import React, { useState } from 'react';

export const PostForm = () => {

    const [getUserID, setUserID] = useState('')
    const [getTitle, setTitle] = useState('')
    const [getBody, setBody] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: getTitle,
                body: getBody,
                userId: getUserID,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='userid' value={getUserID} onChange={(event) => setUserID(event.target.value)} />
                <input type="text" placeholder='title' value={getTitle} onChange={(event) => setTitle(event.target.value)} />
                <input type="text" placeholder='body' value={getBody} onChange={(event) => setBody(event.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
