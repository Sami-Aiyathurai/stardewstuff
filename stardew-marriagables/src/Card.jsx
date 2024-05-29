import Photo from './Photo';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
function Card(props) {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(c => c + 1);
    };

    return(
        <div className="card">
            <Photo name={props.name}></Photo>
            <div className='npc-display'>
                <h3 className="npc-display title"> Birthday</h3>
                <p className="npc-display">{props.birthday}</p>
                <h3 className="npc-display title"> Loves</h3>
                <p className="npc-display">{props.loves}</p>
                <h3 className="npc-display title"> Married</h3>
                <p className="npc-display">{count} times</p>
                <button class="button-33" role="button"onClick={handleClick}>Increase</button>
            </div>
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