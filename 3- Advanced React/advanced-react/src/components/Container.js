const Container = ({children, title}) => {
  return (
    <div>
        <p>{title}</p>
        <p>{children}</p>
    </div>
  )
}

export default Container