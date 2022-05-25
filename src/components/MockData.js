// example of useTransition hook

import React, { useState, useTransition } from 'react';
import Data from '../MOCK_DATA.json'

export const MockData = () => {

    const [getSearch, setSearch] = useState('')
    const [getInputValue, setInputValue] = useState('')
    const [isPending, startTransition] = useTransition()
    const changeHandler = (event) => {
        event.preventDefault()
        setInputValue(event.target.value)
        startTransition(() => setSearch(event.target.value))
    }
    const filterData = Data.filter((item) => {
        let data = item.first_name.includes(getSearch) || item.last_name.includes(getSearch) || item.gender.includes(getSearch)
        return data
    })

    return (
        <div>
            <center>
                <input type="text" placeholder='search...' value={getInputValue} onChange={changeHandler} />
                {isPending && <p>Updating...</p>}
                {
                    filterData.map((item, id) => (
                        <p key={id}> {item.first_name} {item.last_name} : {item.gender}</p>
                    ))
                }
            </center>
        </div>
    )
}
