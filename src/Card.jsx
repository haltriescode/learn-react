import cat from './assets/cat.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={cat} alt="profile picture"></img>
            <h2>Haltriescode</h2>
            <p>Sleeping</p>
        </div>
    )
}

export default Card