

function Hints(props) {
        const name = props.toGuess.Name;
        const hints = props.hintList;
        
        const hintPrompt = ["livable","hates", "movies", "gifts","lives", "universal loves exceptions", "birthday"]

        return(

            <div className="hints-page">
                <ul>
                    {hints.map((hint, index) => <li key={index}> {hintPrompt[index]}: {hint}</li>)}    
                </ul>
                
            </div>
        )

}


export default Hints