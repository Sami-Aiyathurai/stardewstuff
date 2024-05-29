import { getImageUrl } from './utils.js';

function Photo (props) {

    return(
        <div>
            <h1 className='photo-display'>{props.name}</h1>
            <img className='photo-display' src= {getImageUrl(props.name)} alt={props.name}></img>
        </div>
        
    )
}


export default Photo