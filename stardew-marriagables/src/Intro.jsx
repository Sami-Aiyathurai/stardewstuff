

function Intro(props) {
    return(
        <div className="intro-box">
            <h2>
                {props.isWinner && "Congrats, You Won!"}
                {props.isLoser && "Sorry, Try Again!"}
                {(!(props.isWinner || props.isLoser)) && "Welcome"}
            </h2>
            <p>
                Welcome to a mix between guess who and hangman for stardew NPCs. 
                You have six guesses and for every incorrect guess you will be given a clue with information relevent to gifting this npc. You can refresh to restart(with a different npc) or to simply try again. Additionally, all the bachelors/bachelorettes are "livable" and Krobus counts as "livable."
                Good Luck!. 
            </p>
        </div>
    )
}

export default Intro