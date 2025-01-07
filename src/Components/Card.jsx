import cat from '../assets/cat.jpg'
import PropTypes from 'prop-types'

function Card({username= "@guest",status = "Online"}){
    return(
        <div className="card">
            <img className="card-image" src={cat} alt="profile picture"></img>
            <h3 className="card-title">{username}</h3>
            <p className="card-text">{status}</p>
        </div>
    )
}

Card.propTypes = {
    username: PropTypes.string,
    status: PropTypes.string,
}

export default Card