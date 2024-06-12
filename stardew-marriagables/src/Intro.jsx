

function Intro(props) {
    return(
        <div className="intro-box">
            <h2>
                {props.isWinner && "Congrats, You Won!"}
                {props.isLoser && "Sorry, Try Again!"}
                {(!(props.isWinner || props.isLoser)) && "Welcome"}
            </h2>
            <p>
                Welcome to a miz between guess who and hangman. 
                Your job is to guess the stardew valley giftable NPC. You have six guesses and for every incorrect guess you will, eventually, be given a clue with information relevent to gifting this npc. Refresh to attempt again 
            </p>
        </div>
    )
}

export default Intro