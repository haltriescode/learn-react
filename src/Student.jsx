import PropTypes from 'prop-types'

// Props
function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Country: {props.country}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"} </p>
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

// Default Props
// Works when there is no props input

Student.defaultProps = {
    name: "Guest",
    country: "Somewhere on Earth",
    isStudent: true
}
export default Student

