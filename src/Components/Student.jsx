import PropTypes from 'prop-types'

// Props
// Default Props, name= "Guest", country= "Somewhere on Earth", isStudent= true
// Works when there is no props input
function Student({name= "Guest", country= "Somewhere on Earth",
    isStudent= true}){
    return(
        <div>
            <p>Name: {name}</p>
            <p>Country: {country}</p>
            <p>Student: {isStudent ? "Yes" : "No"} </p>
        </div>
    )
}
// Setting props to only include specific data type
// This is good for debugging

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}



export default Student

