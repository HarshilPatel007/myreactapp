// example of events

export const Events = () => {

    const clickEvent = () => {
        console.log('Button Clicked!')
    }

    const clickEventWithParams = (event, count = 1) => {
        console.log(count, event)
    }

    return (
        <div>
            <button onClick={clickEvent}>ClickMe 1</button><br />
            <button onClick={clickEventWithParams}>ClickMe 2</button><br />
            <button onClick={(event) => clickEventWithParams(event, 10)}>ClickMe 3</button>
        </div>
    )
}
