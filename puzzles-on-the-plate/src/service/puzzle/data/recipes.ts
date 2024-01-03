import type {Recipe} from "@/service/puzzle/types";
import {getNutritionValue} from "@/service/puzzle/data/ingredients";
import {IngredientName} from "@/service/puzzle/data/IngredientName";

function getImageUrl(name: string): string {
    return new URL(`../../../assets/photos/${name}`, import.meta.url).href
}

export const getRecipesData = (): Recipe[] => {

    const recipes: Recipe[] = [
        {
            name: "Kurczak curry",
            imageUrl: getImageUrl("curry-chicken.jpg"),
            slug: "curry-chicken",
            shortDescription: "Szybkie danie z piersi z kurczaka doprawione curry",
            tags: ["kurczak", "curry", "indyjskie", "szybkie", "nowe"],
            ingredients: [
                {
                    name: "Pierś z kurczaka",
                    quantity: 500,
                    quantityDescription: "500g piersi z kurczaka",
                    nutritionalValue: getNutritionValue(IngredientName.Chicken)
                },
                {
                    name: "Krem kokosowy",
                    quantity: 476,
                    quantityDescription: "1 krem kokosowy (400ml)",
                    nutritionalValue: getNutritionValue(IngredientName.CoconutCream)
                }
            ]
        }];
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