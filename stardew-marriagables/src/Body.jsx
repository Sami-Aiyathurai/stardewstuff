import Intro from './Intro.jsx'
import Keyboard from './Keyboard.jsx'
import HangmanDrawing from './HangmanDrawing.jsx'
import Hints from './Hints.jsx'

function Body(){
    return(
        <div>
            <Intro></Intro>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <HangmanDrawing></HangmanDrawing>
                <Hints></Hints>
            </div>
            <Keyboard></Keyboard>
        </div>
    )
}

export default Body