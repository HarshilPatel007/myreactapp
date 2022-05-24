// example of parent-child component communication
// by passing a refrence to the function as a props to child component

export const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button><br />
            <button onClick={() => props.greetHandlerWithParams('child')}>Greet Parent with Params</button>
        </div>
    )
}
