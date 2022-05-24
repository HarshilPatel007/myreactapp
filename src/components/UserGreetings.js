// example of conditional rendering

export const UserGreetings = () => {
    const isLoggedIn = false

    return (
        <div>
            <h1>Welcome {isLoggedIn ? 'Harshil' : 'Guest'}</h1>
            <h1>Welcome {isLoggedIn && 'Harshil'}</h1>
        </div>
    )
}
