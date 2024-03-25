import { UserDetails } from "./UserDetails"

export const Challenge = () => {
    const people = [{
        name: 'Ash',
        age: 15,
        job: 'student'
    }, 
    {
        name: 'Bob',
        age: 19,
        job: 'driver'
    },
    {
        name: 'Charlie',
        age: 23,
        job: 'teacher'
    }]
  return (
    <div>
        <h3>Challenge</h3>
        {people.map(person => (
            <UserDetails name={person.name} age={person.age} job={person.job}/>
        ))}
    </div>
  )
}
