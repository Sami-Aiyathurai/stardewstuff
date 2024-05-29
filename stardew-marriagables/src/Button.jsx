

function Button(){

    let count = 0;

    const handleClick = () => {
        count++;
        console.log(`You click ${count} time(s)`)
    };

    return(
        <button onClick={handleClick}> Click me</button>
    )
}

export default Button