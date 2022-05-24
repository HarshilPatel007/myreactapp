// example of parent-child component communication
// by passing a refrence to the function as a props to child component

import { ChildComponent } from "./AChildComp"

export const ParentComponent = () => {
    const greetParent = () => {
        alert(`Hello Parent!`)
    }
    const greetParentWithParams = (child_name) => {
        alert(`Hello Parent! \nfrom your lovely ${child_name}`)
    }
    return (
        <ChildComponent greetHandler={greetParent} greetHandlerWithParams={greetParentWithParams} />
    )
}
