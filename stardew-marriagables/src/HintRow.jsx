

function HintRow(props) {

    const hintPrompt = ["is","hates", "loves the movie", "loves the gift","lives in ", "universal loves exceptions", "birthday"]
    const num = props.i;
    return(
        <div className="hint-row">
            {props.hint} 
        </div>            
    )

}


export default HintRow