import Intro from './Intro.jsx'
import Keyboard from './Keyboard.jsx'
import Hints from './Hints.jsx'
import { useState } from 'react'
import { useCallback } from 'react'
import villagers from "./villagers.json";
import HangmanDrawingPlaceHolder from './HangmanDrawingPlaceHolder.jsx'

function Body(){
    const names = villagers.map(villager => {
        return villager.Name;
    })

    const [npcToGuess, setNpcToGuess] = useState(() => {
        return villagers[Math.floor(Math.random() * names.length)]

    })

    const [guessedNpcs, setGuessedNpcs] = useState([]);
    const [isWinner, setIsWinner] = useState(false);
    const isLoser = (guessedNpcs.length >= 6);
    const [hints, setHints] = useState([]);

    function updateHints() {
        const numHints = guessedNpcs.length;
        const tempHint = npcToGuess.Hints[numHints];
        console.log("hint: " + tempHint);
        const temp = randomHint(tempHint);
        setHints(h => [...h, temp]);
    }

    function randomHint(hints) {
        return hints[Math.floor(Math.random() * hints.length)]
    }

    const addGuessNPC = useCallback(
        (npcName) => {
            if (guessedNpcs.includes(npcName))
                return
            else if(npcName == npcToGuess.Name) {
                setIsWinner(true);
                return
            }

            setGuessedNpcs(currentNPCS => [... currentNPCS, npcName])
            updateHints()
        }, [guessedNpcs]
    )

    return(
        <div>
            
            <Intro isWinner={isWinner} isLoser={isLoser}></Intro>
            <div className='game-screen'>
                <HangmanDrawingPlaceHolder numGuesses = {guessedNpcs.length}></HangmanDrawingPlaceHolder>
                <Hints toGuess = {npcToGuess} hintList = {hints}></Hints>
            </div>
            <Keyboard disable={isLoser || isWinner} names={names} inactive={guessedNpcs} addGuess={addGuessNPC}></Keyboard>
        </div>
    )
}

export default Body