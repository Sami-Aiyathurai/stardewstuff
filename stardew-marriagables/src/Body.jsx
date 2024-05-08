import Card from './Card.jsx'
import Intro from './Intro.jsx'

function Body(){
    return(
        <>
            <div>
                <Intro></Intro>
                <Card name= "Abigail"></Card>
                <Card name= "Alex"></Card>
                <Card name= "Elliot"></Card>
                <Card name= "Emily"></Card>
                <Card name= "Haley" loves="Coconut, Fruit Salad, Pink Cake, Sunflower"></Card>
                <Card name= "Harvey"></Card>
                <Card name= "Krobus"></Card>
                <Card name= "Leah"></Card>
                <Card name= "Maru"></Card>
                <Card name= "Penny"></Card>
                <Card name= "Sam"></Card>
                <Card name="Sebastian" loves="Frozen Tear, Obsidian, Pumpkin Soup, Sashimi, Void Egg, Frog Egg" ></Card>
                <Card name= "Shane" loves="Coconut, Fruit Salad, Pink Cake, Sunflower"></Card>
            </div>
        </>
    )
}

export default Body