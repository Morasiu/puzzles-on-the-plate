import {getNutritionValue} from "@/service/puzzle/data/ingredients";
import {IngredientName} from "@/service/puzzle/data/IngredientName";
import type {Recipe} from "@/service/puzzle/types";
import {getImageUrl} from "@/service/puzzle/data/getImageUrl";
import {CookingPhase} from "@/service/puzzle/data/CookingPhase";

export const curryChicken: Recipe =
    {
        imageUrl: getImageUrl("curry-chicken.jpg"),
        tags: ["kurczak", "curry", "indyjskie", "szybkie", "nowe"],
        puzzles: [
            {
                name: "Kurczak curry",
                slug: "curry-kurczak",
                shortDescription: "Szybkie danie z piersi z kurczaka doprawione curry",
                ingredients: [
                    IngredientName.Chicken,
                    IngredientName.RedPepper,
                    IngredientName.CoconutCream,
                    IngredientName.Curry,
                    IngredientName.Honey,
                    IngredientName.WhiteRice,
                ]
            },
            {
                name: "Orzechowy kurczak curry",
                slug: "curry-orzechowe",
                shortDescription: "Kurczak curry z dodatkiem orzechów",
                ingredients: [
                    IngredientName.Chicken,
                    IngredientName.RedPepper,
                    IngredientName.CoconutCream,
                    IngredientName.Curry,
                    IngredientName.MapleSyrup,
                    IngredientName.WhiteRice,
                ]
            },
            {
                name: "Tofu curry",
                slug: "curry-tofu",
                shortDescription: "Tofu curry z dodatkiem orzechów",
                ingredients: [
                    IngredientName.Tofu,
                    IngredientName.RedPepper,
                    IngredientName.CoconutCream,
                    IngredientName.Curry,
                    IngredientName.MapleSyrup,
                    IngredientName.WhiteRice,
                ]
            }
        ],
        ingredients: [
            {
                name: IngredientName.Chicken,
                quantity: 500,
                quantityDescription: "500g piersi z kurczaka",
                nutritionalValue: getNutritionValue(IngredientName.Chicken),
                instructions: [
                    {
                        details: "Umyj piersi i pokrój w kostkę.",
                        cookingPhase: CookingPhase.Preparation1,
                    },
                    {
                        details: "Dodaj kurczaka na dużą patelnię (najlepiej patelnie typu wok) i podsmaż aż nie będzie już różowy.",
                        cookingPhase: CookingPhase.Frying1,
                    }
                ]
            },
            {
                name: IngredientName.RedPepper,
                quantity: 120,
                quantityDescription: "1 czerwona papryka (ok 120g)",
                nutritionalValue: getNutritionValue(IngredientName.RedPepper),
                instructions: [
                    {
                        details: "Umyj i pokrój paprykę w kostkę.",
                        cookingPhase: CookingPhase.Preparation1,
                    },
                    {
                        details: "Przygotowaną paprykę dodaj na patelnię i smaż przez 5 minut.",
                        cookingPhase: CookingPhase.Frying2,
                    }
                ],
            },
            {
                name: IngredientName.CoconutCream,
                quantity: 476,
                quantityDescription: "1 krem kokosowy (400ml)",
                nutritionalValue: getNutritionValue(IngredientName.CoconutCream),
                instructions: [
                    {
                        details: "Dodaj krem kokosowy na patelnię.",
                        cookingPhase: CookingPhase.Mixing1
                    }
                ]
            },
            {
                name: IngredientName.Curry,
                quantity: 12,
                quantityDescription: "2 łyżki curry",
                nutritionalValue: getNutritionValue(IngredientName.Curry),
                instructions: [
                    {
                        details: "Dodaj curry na patelnię.",
                        cookingPhase: CookingPhase.Mixing1
                    }
                ]
            },
            {
                name: IngredientName.Honey,
                quantity: 21,
                quantityDescription: "1 łyżka miodu",
                nutritionalValue: getNutritionValue(IngredientName.Honey),
                instructions: [
                    {
                        details: "Dodaj miód na patelnię.",
                        cookingPhase: CookingPhase.Mixing1
                    }
                ]
            },
            {
                name: IngredientName.WhiteRice,
                quantity: 100,
                quantityDescription: "1 torebka białego ryżu (100g)",
                nutritionalValue: getNutritionValue(IngredientName.WhiteRice),
                instructions: [
                    {
                        details: "Ugotuj ryż według instrukcji na opakowaniu.",
                        cookingPhase: CookingPhase.Preparation1
                    },
                    {
                        details: "Dodaj ryż na palelnię i wszystko wymieszaj razem.",
                        cookingPhase: CookingPhase.Mixing2
                    }
                ]
            },
            {
                name: IngredientName.MapleSyrup,
                quantity: 12,
                quantityDescription: "2 łyżki syropu klonowego",
                nutritionalValue: getNutritionValue(IngredientName.MapleSyrup),
                instructions: [
                    {
                        details: "Dodaj syrop klonowy na patelnię.",
                        cookingPhase: CookingPhase.Mixing1
                    }
                ]
            },
            {
                name: IngredientName.Tofu,
                quantity: 350,
                quantityDescription: "1 paczka tofu (350g)",
                nutritionalValue: getNutritionValue(IngredientName.Tofu),
                instructions: [
                    {
                        details: "Pokrój tofu w kostkę.",
                        cookingPhase: CookingPhase.Preparation1
                    },
                    {
                        details: "Smaż tofu na patelni aż się zarumieni.",
                        cookingPhase: CookingPhase.Frying1
                    }
                ]
            },
        ]
    }
;