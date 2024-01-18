import type {Recipe} from "@/service/puzzle/types";
import {curryChicken} from "@/service/puzzle/data/recipes/curryChicken";

export const getRecipesData = (): Recipe[] => {
    const recipes: Recipe[] = [
        curryChicken
    ];
    const numberOfSoon = 19;
    for (let i = 0; i < numberOfSoon; i++) {
        recipes.push(
            {
                name: "Wkrótce",
                imageUrl: "https://picsum.photos/1000/1000/?random&i=" + i,
                slug: "soon-" + i,
                shortDescription: "soon-desc-" + i,
                tags:["soon"],
                ingredients: []
            })
    }

    return recipes;
}