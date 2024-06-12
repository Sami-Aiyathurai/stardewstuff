
import { getImageUrl } from './utils.js';

function Keyboard(props) {
    
    return(
        <div>
            {
                props.names.map(npc => {
                    return(
                        <div className={(props.inactive.includes(npc) || props.disable)? "inactive-card" : "card"}>
                            <div>
                                <h1 className='photo-display'>{npc}</h1>
                                <img className='photo-display' src= {getImageUrl(npc)} alt={npc}></img>
                            </div>
                            <button
                            onClick={() => props.addGuess(npc)}
                            disabled={props.inactive.includes(npc) || props.disable}
                            className="button-70"
                            >Guess</button>
                         </div>
                    )
                })
            }
            
        </div>
    )
}


export default Keyboard