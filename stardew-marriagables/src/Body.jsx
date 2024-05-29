import Card from './Card.jsx'
import Intro from './Intro.jsx'

function Body(){
    return(
        <>
            <div>
                <Intro></Intro>
                <Card name= "Haley" loves="Coconut, Fruit Salad, Pink Cake, Sunflower"></Card>
                <Card name="Sebastian" loves="Frozen Tear, Obsidian, Pumpkin Soup, Sashimi, Void Egg, Frog Egg" ></Card>
                <Card name= "Shane" loves="Beer, Pizza, Hot Peppers, Pepper Poppers"></Card>
            </div>
        </>
    )
}

export default Body