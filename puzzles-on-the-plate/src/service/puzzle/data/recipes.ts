import type {Recipe} from "@/service/puzzle/types";

function getImageUrl(name) :string {
    return new URL(`../../../assets/photos/${name}`, import.meta.url).href
}

export const getRecipesData = (): Recipe[] => {

    const recipes = [
        {
            name: "Kurczak curry",
            imageUrl: getImageUrl("curry-chicken.jpg"),
            slug: "curry-chicken"
        }];
    const numberOfSoon = 19;
    for (let i = 0; i < numberOfSoon; i++) {
        recipes.push(
            {
            name: "Wkrótce",
            imageUrl: "https://picsum.photos/1000/1000/?random&i=" + i,
            slug: "soon-" + i
        })
    }

    return recipes;
}