import Card from "../card/card";

function Cards(props) {

    console.log(props);
    const recipes = props.recipe
    console.log(recipes);
    return ( 
        <div>
            {
                recipes.map((recipe)=>
                <Card/>
                )
            }
        </div>
     );
}

export default Cards;