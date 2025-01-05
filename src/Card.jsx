import cat from './assets/cat.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={cat} alt="profile picture"></img>
            <h3 className="card-title">Haltriescode</h3>
            <p className="card-text">Sleeping</p>
        </div>
    )
}

export default Card