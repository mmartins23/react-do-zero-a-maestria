import { useState } from "react";

const RenderingList = () => {
    const cities = ['London', 'Madrid', 'Milano'];

    const [countries, setCountries] = useState([{
        id: 1, name: 'England', currency: "GBP"
    }, {
        id: 2, name: 'Spain', currency: 'Euro'
    }, {
        id: 3, name: 'Italy', currency: 'Euro'
    }])

    const deleteRandomCountry = () => {
        const randomCountry = Math.floor(Math.random() * 4);

        setCountries((prevCountries) => {
            return prevCountries.filter(country => randomCountry !== country.id)
        })
    }
    return (
        <div>
            {cities.map(city => (
                <li>{city}</li>
            ))}
            <div>
                {countries.map(country => (
                    <li key={country.id}>{country.name}</li>
                ))}
                <button onClick={deleteRandomCountry}>Delete Country</button>
            </div>
        </div>
    )
}

export default RenderingList