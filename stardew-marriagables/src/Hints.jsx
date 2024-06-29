import HintRow from "./HintRow";

function Hints(props) {
        const name = props.toGuess.Name;
        const hints = props.hintList;
        
        const hintPrompt = ["livable","hates", "movies", "gifts","lives", "universal loves exceptions", "birthday"]

        return(

            <div className="hints-page">
                <h1 className="hint-title">
                    This villager....
                </h1>
                <ul>
                    {hints.map((hint, index) => <li key={index}><HintRow i={index} hint={hint}></HintRow> </li>)}    
                </ul>
                
            </div>
        )

}


export default Hints