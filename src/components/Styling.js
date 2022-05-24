// example of using styling in component

import '../styles/stylesheet.css'

export const Styling = () => {

    const heading = {
        fontSize: '50px',
        color: 'green'
    }

    return (
        <div>
            <h1 className='primary'>Hello World from StyleSheet</h1>
            <p style={heading}>Hello World from Inline Styling</p>
        </div>
    )
}
