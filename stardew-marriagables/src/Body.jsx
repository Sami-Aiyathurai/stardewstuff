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
        //return villagers[1];
    })

    const [guessedNpcs, setGuessedNpcs] = useState([]);
    const [isWinner, setIsWinner] = useState(false);
    const isLoser = (guessedNpcs.length >= 6);
    const [hints, setHints] = useState([]);

    function updateHints() {
        const numHints = (guessedNpcs.length);
        var tempHint = npcToGuess.Hints[numHints];
        var index;
        if (numHints == 4) {
            if (npcToGuess.Name == "Haley" || npcToGuess.Name == "Penny") {
                tempHint = npcToGuess.Hints[5];
                index = 5;
            } else {
                tempHint = npcToGuess.Hints[4];
                index = 4;
            }
        } else if (numHints == 5) {
            tempHint = npcToGuess.Hints[6];
            index = 6;
        } else {
            index = numHints;
        }
        const temp = randomHint(tempHint);
        const full = fullHint(temp, index);
        setHints(h => [...h, full]);
    }

    function fullHint(hint, index){
        const hintPrompt = ["is ","hates ", "loves the movie ", "loves recieving ","lives in ", "universal loves exceptions ", "birthday "];
        var full;
        if (index == 0) {
            if (hint) {
                full = "can move in with you";
            } else {
                full = "cannot move in with you";
            }
        } else if (index == 1) {
            if (hint === "Universal") {
                full = "only hates universally hated gifts";
            } else {
                full = hintPrompt[index] + hint;
            }
        } else if (index == 5) {
            full = "hates " + hint + " unlike most villagers";
        } else if(index == 6) {
            full = "was born on " + hint;
        } else {
            full = hintPrompt[index] + hint;
        }
        return full;
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