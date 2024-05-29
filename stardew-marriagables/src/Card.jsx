import { getImageUrl } from './utils.js';
import PropTypes from 'prop-types';
import Button from './Button.jsx';
function Card(props) {

    return(
        <div className="card">
            <div className='npc-display'>
                <img className='npc-display' src= {getImageUrl(props.name)} alt={props.name}></img>
                <h1 className='npc-display'>{props.name}</h1>
                <h3 className="npc-display"> Loves</h3>
                <p className="npc-display">{props.loves}</p>
            </div>

            <Button></Button>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    loves: PropTypes.string,
}
Card.defaultProps = {
    name: "Marriage Candidate",
    loves: "Universal Loves"
}

export default Card