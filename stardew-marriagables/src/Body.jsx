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

    const addGuessNPC = useCallback(
        (npcName) => {
            if (guessedNpcs.includes(npcName))
                return
            else if(npcName == npcToGuess.Name)
                return
    
            setGuessedNpcs(currentNPCS => [... currentNPCS, npcName])
        }, [guessedNpcs]
    )

    console.log(npcToGuess.Name)
    console.log(guessedNpcs)
    return(
        <div>
            
            <Intro></Intro>
            <div className='game-screen'>
                <HangmanDrawingPlaceHolder numGuesses = {guessedNpcs.length}></HangmanDrawingPlaceHolder>
                <Hints></Hints>
            </div>
            <Keyboard names={names} inactive={guessedNpcs} addGuess={addGuessNPC}></Keyboard>
        </div>
    )
}

export default Body