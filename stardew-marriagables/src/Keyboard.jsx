
import villagers from "./villagers.json";
import { getImageUrl } from './utils.js';

function Keyboard() {
    
    const names = villagers.map(villager => {
        return villager.Name;
    })

    return(
        <div>
            {
                names.map(npc => {
                    return(
                        <div className="card">
                            <div>
                                <h1 className='photo-display'>{npc}</h1>
                                <img className='photo-display' src= {getImageUrl(npc)} alt={npc}></img>
                                 <button>Guess</button>
                            </div>
                         </div>
                    )
                })
            }
            
        </div>
    )
}


export default Keyboard