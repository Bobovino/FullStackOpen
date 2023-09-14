
const Total = ({parts}) => {

    return(
      <>
        <span>Total number of exercises: {parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)}
        </span>
      </>
    )
  }

export default Total;