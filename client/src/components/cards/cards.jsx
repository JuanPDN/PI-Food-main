import Card from "../card/card";

function Cards(props) {

    const recipes = props.recipe
    return (
        <div>
            {
                recipes.map((recipe) =>
                    <Card
                        id={recipe.id}
                        name={recipe.name}
                        image={recipe.image}
                        diets={recipe.diets}
                    />
                )
            }
        </div>
    );
}

export default Cards;