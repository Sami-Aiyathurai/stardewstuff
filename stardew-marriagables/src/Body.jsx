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
    
    const [guessedNpcs, setGuessedNpcs] = useState(["Placeholder"]);
    const [isWinner, setIsWinner] = useState(false);
    const isLoser = (guessedNpcs.length >= 6);
    const [hints, setHints] = useState([]);

    const [npcToGuess, setNpcToGuess] = useState(() => {
        const villager = villagers[Math.floor(Math.random() * names.length)];
        var hint;
        if (villager.Hints[0][0]) {
            hint = "can move in with you";
        } else {
            hint = "cannot move in with you";
        }
        setHints(h => [hint])
        return villager;
        //return villagers[1];
    })

    function updateHints() {
        const numHints = (guessedNpcs.length);
        var tempHint = npcToGuess.Hints[numHints];
        console.log(tempHint)
        var index;
        if (numHints == 3) {
            if (npcToGuess.Name == "Haley" || npcToGuess.Name == "Penny") {
                tempHint = npcToGuess.Hints[4];
                index = 4;
            } else {
                tempHint = npcToGuess.Hints[3];
                index = 3;
            }
        } else if (numHints == 4) {
            tempHint = npcToGuess.Hints[5];
            index = 5;
        } else {
            index = numHints;
        }
        const temp = randomHint(tempHint);
        const full = fullHint(temp, index);
        setHints(h => [...h, full]);
    }

    function fullHint(hint, index){
        const hintPrompt = ["is ", "loves the movie ", "loves recieving ","lives in ", "universal loves exceptions ", "birthday "];
        var full;
        if (index == 1) {
            if (hint === "None") {
                full = "does not love any movies"
            } else {
                full = hintPrompt[index] + hint;
            }
        } else if (index == 4) {
            full = "hates " + hint + " unlike most villagers";
        } else if(index == 5) {
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
            if (guessedNpcs.length < 5) {
                updateHints()
            }
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