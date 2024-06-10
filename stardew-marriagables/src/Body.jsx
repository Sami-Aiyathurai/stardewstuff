import Intro from './Intro.jsx'
import Keyboard from './Keyboard.jsx'
import Hints from './Hints.jsx'
import { useState } from 'react'
import villagers from "./villagers.json";
import HangmanDrawingPlaceHolder from './HangmanDrawingPlaceHolder.jsx'

function Body(){
    const names = villagers.map(villager => {
        return villager.Name;
    })

    const [npcToGuess, setNpcToGuess] = useState(() => {
        return villagers[Math.floor(Math.random() * names.length)]

    })
    console.log(npcToGuess)
    return(
        <div>
            
            <Intro></Intro>
            <div className='game-screen'>
                <HangmanDrawingPlaceHolder></HangmanDrawingPlaceHolder>
                <Hints></Hints>
            </div>
            <Keyboard names={names} npc={npcToGuess}></Keyboard>
        </div>
    )
}

export default Body