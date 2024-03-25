const FootballTeams = ({ id, name, city, country, stadium }) => {
    return (
        <div>
            <h1>Football Team Info</h1>
            <ul key={id}>
                <li>{name} - {city} - {country} - {stadium}</li>
            </ul>
        </div>
    )
}

export default FootballTeams