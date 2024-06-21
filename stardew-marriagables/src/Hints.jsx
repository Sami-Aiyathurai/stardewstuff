import HintRow from "./HintRow";

function Hints(props) {
        const npc = props.toGuess.Hints;
        const name = props.toGuess.Name;
        console.log(npc)

        const hintTitle = ["Livable", "Gifts", "Movies", "Birthday"]
        return(
            <div className="hints-page">
                {name}
                <ul>
                    {npc.map((hint, index) => <li key={index}><HintRow hint={hint}></HintRow></li>)}
                </ul>
                
            </div>
        )

}


export default Hints