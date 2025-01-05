import App from "./App"

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

export default Student

