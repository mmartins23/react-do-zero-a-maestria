const CarDetails = ({brand, color, year}) => {
  return (
    <div>
        <h3>Car Details</h3>
        <p>Model: {brand}</p>
        <p>Color: {color}</p>
        <p>Year: {year}</p>
    </div>
  )
}

export default CarDetails;