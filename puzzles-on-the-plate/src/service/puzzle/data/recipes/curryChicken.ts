import {getNutritionValue} from "@/service/puzzle/data/ingredients";
import {IngredientName} from "@/service/puzzle/data/IngredientName";
import type {Recipe} from "@/service/puzzle/types";
import {getImageUrl} from "@/service/puzzle/data/getImageUrl";
import {CookingPhase} from "@/service/puzzle/data/CookingPhase";

export const curryChicken: Recipe =
    {
        name: "Kurczak curry",
        imageUrl: getImageUrl("curry-chicken.jpg"),
        slug: "curry-kurczak",
        shortDescription: "Szybkie danie z piersi z kurczaka doprawione curry",
        tags: ["kurczak", "curry", "indyjskie", "szybkie", "nowe"],
        ingredients: [
            {
                name: "Pierś z kurczaka",
                quantity: 500,
                quantityDescription: "500g piersi z kurczaka",
                nutritionalValue: getNutritionValue(IngredientName.Chicken),
                instructions: [
                    {
                        details: "Umyj piersi i pokrój w kostkę.",
                        cookingPhase: CookingPhase.Preparation1,
                    },
                    {
                        details: "Dodaj kurczaka i podsmaż na dużej patelni (najlepiej do woka) aż nie będzie już różowy.",
                        cookingPhase: CookingPhase.Frying1,
                    }
                ]
            },
            {
                name: "Czerwona papryka",
                quantity: 120,
                quantityDescription: "1 czerwona papryka (ok 120g)",
                nutritionalValue: getNutritionValue(IngredientName.RedPepper),
                instructions: [
                    {
                        details: "Pokrój paprykę w kostkę.",
                        cookingPhase: CookingPhase.Preparation1,
                    },
                    {
                        details: "Przygotowaną paprykę dodaj do kurczaka na patelnię i smaż przez 5 minut.",
                        cookingPhase: CookingPhase.Frying2,
                    }
                ],
            },
            {
                name: "Krem kokosowy",
                quantity: 476,
                quantityDescription: "1 krem kokosowy (400ml)",
                nutritionalValue: getNutritionValue(IngredientName.CoconutCream),
                instructions: [
                    {
                        details: "Dodaj krem kokosowy na patelnię.",
                        cookingPhase: CookingPhase.Frying3
                    }
                ]
            },
            {
                name: "Curry",
                quantity: 12,
                quantityDescription: "2 łyżki curry",
                nutritionalValue: getNutritionValue(IngredientName.Curry),
                instructions: [
                    {
                        details: "Dodaj curry na patelnię.",
                        cookingPhase: CookingPhase.Frying3
                    }
                ]
            },
            {
                name: "Miód",
                quantity: 21,
                quantityDescription: "1 łyżka miodu",
                nutritionalValue: getNutritionValue(IngredientName.Honey),
                instructions: [
                    {
                        details: "Dodaj miód na patelnię.",
                        cookingPhase: CookingPhase.Frying3
                    }
                ]
            },
            {
                name: "Ryż",
                quantity: 100,
                quantityDescription: "1 torebka ryżu (100g)",
                nutritionalValue: getNutritionValue(IngredientName.Rice),
                instructions: [
                    {
                        details: "Ugotuj ryż.",
                        cookingPhase: CookingPhase.Preparation1
                    },
                    {
                        details: "Dodaj ryż na palelnię.",
                        cookingPhase: CookingPhase.Mixing1
                    }
                ]
            },
        ]
    }
;