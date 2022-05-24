// example of props

export const Greet = (props) => {

    return (
        <div>
            <h1>Hello {props.name} {props.surename}</h1>
            {props.children}
        </div>
    )
}


// export default Greet
