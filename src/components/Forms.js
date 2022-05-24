// example of handeling html forms

import React, { useState } from 'react';

export const Forms = () => {

    const [getUsername, setUsername] = useState('')
    const [getEmail, setEmail] = useState('')
    const [getGender, setGender] = useState('')
    const [getPoliticalView, setPoliticalView] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(` ${getUsername} \n ${getEmail} \n ${getGender} \n ${getPoliticalView}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' value={getUsername} onChange={(event) => setUsername(event.target.value)} />
                <input type="email" placeholder='email' value={getEmail} onChange={(event) => setEmail(event.target.value)} />
                <select value={getGender} onChange={(event) => setGender(event.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input type="radio" value="Right Wing" checked={getPoliticalView === 'Right Wing'} onChange={(event) => setPoliticalView(event.target.value)} />Right Wing
                <input type="radio" value="Left Wing" checked={getPoliticalView === 'Left Wing'} onChange={(event) => setPoliticalView(event.target.value)} />Left Wing
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
