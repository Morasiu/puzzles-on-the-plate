import type {Recipe} from "@/service/puzzle/types";
import {curryChicken} from "@/service/puzzle/data/recipes/curryChicken";

export const getRecipesData = (): Recipe[] => {
    const recipes: Recipe[] = [
        curryChicken
    ];
    const numberOfSoon = 20 - recipes.length
    for (let i = 0; i < numberOfSoon; i++) {
        recipes.push(
            {
                imageUrl: "https://picsum.photos/1000/1000/?random&i=" + i,
                tags: ["soon"],
                ingredients: [],
                puzzles: [
                    {
                        name: "Wkrótce", slug: "soon-" + i, shortDescription: "soon", ingredients: []
                    }
                ]
            })
    }

    return recipes;
}