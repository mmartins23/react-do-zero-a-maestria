export const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <p>{name} : {age} : {job}</p>
        <h6><b>{age >= 18 ? "Old enough to drive" : ""}</b></h6>
    </div>
  )
}
