import {getNutritionValue} from "@/service/puzzle/data/ingredients";
import {IngredientName} from "@/service/puzzle/data/IngredientName";
import type {Recipe} from "@/service/puzzle/types";
import {getImageUrl} from "@/service/puzzle/data/getImageUrl";
import {CookingPhase} from "@/service/puzzle/data/CookingPhase";

export const curryChicken: Recipe =
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
                nutritionalValue: getNutritionValue(IngredientName.Chicken),
                cookingPhase: CookingPhase.Frying1,
                instructions: "Pokrój piersi w kostkę i podsmaż na dużej patelni (najlepiej do woka) aż nie będzie różowy."
            },
            {
                name: "Czerwona papryka",
                quantity: 120,
                quantityDescription: "1 czerwona papryka (ok 120g)",
                nutritionalValue: getNutritionValue(IngredientName.RedPepper),
                cookingPhase: CookingPhase.Frying2,
                instructions: "Pokrój paprykę w kostkę i dodaj na patelnię.",
            },
            {
                name: "Krem kokosowy",
                quantity: 476,
                quantityDescription: "1 krem kokosowy (400ml)",
                nutritionalValue: getNutritionValue(IngredientName.CoconutCream),
                cookingPhase: CookingPhase.Frying3,
                instructions: "Dodaj krem kokosowy na patlenię."
            },
            {
                name: "Curry",
                quantity: 12,
                quantityDescription: "2 łyżki curry",
                nutritionalValue: getNutritionValue(IngredientName.Curry),
                cookingPhase: CookingPhase.Frying4,
                instructions: "Dodaj curry na patelnię."
            },
            {
                name: "Miód",
                quantity: 21,
                quantityDescription: "1 łyżka miodu",
                nutritionalValue: getNutritionValue(IngredientName.Honey),
                cookingPhase: CookingPhase.Frying4,
                instructions: "Dodaj miód na patelnię."
            },
            {
                name: "Ryż",
                quantity: 100,
                quantityDescription: "1 torebka ryżu (100g)",
                nutritionalValue: getNutritionValue(IngredientName.Rice),
                cookingPhase: CookingPhase.Mixing1,
                instructions: "Ugotuj ryż i dodaj go na palelnię."
            },
        ]
    };