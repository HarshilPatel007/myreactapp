// example of displaying a list of items

export const Items = () => {
    const cars = ['maruti alto 800', 'toyota fortuner', 'tata tiago', 'mahindra thar']

    return (
        <div>
            {
                cars.map((car, id) => {
                    return <p key={id}>{car}</p> // key prop must be unique
                })
            }
        </div>
    )
}
