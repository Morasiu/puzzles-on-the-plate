import type {Recipe} from "@/service/puzzle/types";
import {curryChicken} from "@/service/puzzle/data/recipes/curryChicken";
import {potatoCasserole} from "@/service/puzzle/data/recipes/potatoCasserole";

export const getRecipesData = (): Recipe[] => {
    const recipes: Recipe[] = [
        curryChicken,
        potatoCasserole
    ];
    const numberOfSoon = 20 - recipes.length
    for (let i = 0; i < numberOfSoon; i++) {
        recipes.push(
            {
                imageUrl: "https://picsum.photos/1000/1000/?random&i=" + i,
                tags: ["soon"],
                servings: 1,
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