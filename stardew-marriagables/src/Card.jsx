import profilePic from './assets/haleyPortrait.png'

function Card() {

    return(
        <div className="card">
            <img src= {profilePic} alt="Haley's Portrait"></img>
            <h2>Haley</h2>
            <p>Info about Haley</p>
        </div>
    )
}

export default Card