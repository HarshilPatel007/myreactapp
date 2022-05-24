// example of state

import React, { useState } from 'react'

export const Message = () => {

    const [getMsg, setMsg] = useState('Welcome Visitor')

    return (
        <div>
            <h1>{getMsg}</h1>
            <button onClick={() => setMsg('Hurray!!! Subscribed!')}>Subscribe</button>
        </div>
    )
}
