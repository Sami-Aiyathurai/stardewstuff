
import { getImageUrl } from './utils.js';

function Keyboard(props) {
    
    return(
        <div>
            {
                props.names.map(npc => {
                    return(
                        <div className={(props.inactive.includes(npc) || props.disable)? "inactive-card" : "card"}>
                            <button
                            onClick={() => props.addGuess(npc)}
                            disabled={props.inactive.includes(npc) || props.disable}
                            className='photo-display'
                            >
                                <div className='photo-display'>
                                    <img className='photo-display' src= {getImageUrl(npc)} alt={npc}></img>
                                    <h1 className='photo-display'>{npc}</h1>
                                </div>
                            </button>
                         </div>
                    )
                })
            }
            
        </div>
    )
}


export default Keyboard