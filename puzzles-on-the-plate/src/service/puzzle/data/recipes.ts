import type {Recipe} from "@/service/puzzle/types";

export const getRecipesData = (): Recipe[] => {
    const recipes = [
        {
            name: "Kurczak curry",
            imageUrl: "https://picsum.photos/1000/1000",
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