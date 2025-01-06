import cat from './assets/cat.jpg'
import PropTypes from 'prop-types'

function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={cat} alt="profile picture"></img>
            <h3 className="card-title">{props.username}</h3>
            <p className="card-text">{props.status}</p>
        </div>
    )
}

Card.propTypes = {
    username: PropTypes.string,
    status: PropTypes.string,
}

Card.defaultProps = {
    username: "@guest",
    status: "online"
}

export default Card