import {getNutritionValue} from "@/service/puzzle/data/ingredients";
import {IngredientName} from "@/service/puzzle/data/IngredientName";
import type {Recipe} from "@/service/puzzle/types";
import {getImageUrl} from "@/service/puzzle/data/getImageUrl";
import {CookingPhase} from "@/service/puzzle/data/CookingPhase";

export const potatoCasserole: Recipe =
    {
        imageUrl: getImageUrl("potato-casserole.jpg"),
        tags: ["ziemniaczane", "zapiekanka", "szybkie", "nowe"],
        servings: 4,
        puzzles: [
            {
                name: "Zapiekanka z kurczakiem",
                slug: "potato-casserole",
                shortDescription: "Szybkie danie z ziemniaków i kurczakiem",
                ingredients: [
                    IngredientName.Chicken,
                    IngredientName.Potato,
                    IngredientName.Garlic,
                    IngredientName.WorcestershireSauce,
                    IngredientName.OliveOil,
                    IngredientName.Salt,
                    IngredientName.SweetPepper,
                    IngredientName.MozzarellaCheese,
                ]
            },
            {
                name: "Serowa zapiekanka",
                slug: "potato-casserole-cheese",
                shortDescription: "Zapiekanka ziemniaczana z serem i brokułami",
                ingredients: [
                    IngredientName.Potato,
                    IngredientName.Salt,
                    IngredientName.Butter,
                    IngredientName.Mustard,
                    IngredientName.WheatFlour,
                    IngredientName.Milk,
                    IngredientName.CheddarCheese,
                ]
            },
        ],
        ingredients: [
            {
                name: IngredientName.Potato,
                quantity: 500,
                quantityDescription: "500g ziemniaków",
                nutritionalValue: getNutritionValue(IngredientName.Potato),
                instructions: [
                    {
                        details: "Umyj ziemniaki i pokrój w talarki ok 1.5cm.",
                        cookingPhase: CookingPhase.Preparation1,
                    },
                    {
                        details: "Wymieszaj ziemniaki misce z marynatą i dodaj do naczynia żaroodpornego. Następnie piecz przez 25 min w 200 stopniach.",
                        cookingPhase: CookingPhase.Baking1,
                    }
                ]
            },
            {
                name: IngredientName.Chicken,
                quantity: 500,
                quantityDescription: "500g piersi z kurczaka",
                nutritionalValue: getNutritionValue(IngredientName.Chicken),
                instructions: [
                    {
                        details: "Umyj piersi i pokrój w kostkę ok 1cm.",
                        cookingPhase: CookingPhase.Preparation1,
                    },
                    {
                        details: "Wymieszaj kurczaka w misce w marynatą i dodaj na wierzch zmieniaków w naczyniu żaroodpornym. Nastęnie piecz przez 15 minut.",
                        cookingPhase: CookingPhase.Baking2,
                    }
                ]
            },

            {
                name: IngredientName.MozzarellaCheese,
                quantity: 150,
                quantityDescription: "150g startego sera mozzarella",
                nutritionalValue: getNutritionValue(IngredientName.MozzarellaCheese),
                instructions: [
                    {
                        details: "Posyp zapiekankę startym serem i piecz przez 5 minut.",
                        cookingPhase: CookingPhase.Baking3,
                    }
                ]
            },
            {
                name: IngredientName.OliveOil,
                quantity: 60,
                quantityDescription: "4 łyżki oliwy",
                nutritionalValue: getNutritionValue(IngredientName.OliveOil),
                instructions: [
                    {
                        details: "Wlej oliwę do miski na marynatę",
                        cookingPhase: CookingPhase.Preparation2,
                    },
                ]
            },
            {
                name: IngredientName.Garlic,
                quantity: 10,
                quantityDescription: "2 ząbki czosnku",
                nutritionalValue: getNutritionValue(IngredientName.Garlic),
                instructions: [
                    {
                        details: "Wyciśnij czosnek przez praskę i dodaj do marynaty",
                        cookingPhase: CookingPhase.Preparation2,
                    },
                ]
            },
            {
                name: IngredientName.WorcestershireSauce,
                quantity: 30,
                quantityDescription: "2 łyzki sosu Worcestershire",
                nutritionalValue: getNutritionValue(IngredientName.WorcestershireSauce),
                instructions: [
                    {
                        details: "Dodaj sos Worcestershire do marynaty",
                        cookingPhase: CookingPhase.Preparation2,
                    },
                ]
            },
            {
                name: IngredientName.Salt,
                quantity: 0.25,
                quantityDescription: "1 szczypta soli",
                nutritionalValue: getNutritionValue(IngredientName.Salt),
                instructions: [
                    {
                        details: "Dodaj sól do marynaty",
                        cookingPhase: CookingPhase.Preparation2,
                    },
                ]
            },
            {
                name: IngredientName.SweetPepper,
                quantity: 15,
                quantityDescription: "3 łyżeczki papryki słodkiej w proszku",
                nutritionalValue: getNutritionValue(IngredientName.SweetPepper),
                instructions: [
                    {
                        details: "Dodaj słodką paprykę do marynaty",
                        cookingPhase: CookingPhase.Preparation2,
                    },
                ]
            },
            {
                name: IngredientName.Butter,
                quantity: 35,
                quantityDescription: "1.5 łyżki masła (ok 35g)",
                nutritionalValue: getNutritionValue(IngredientName.Butter),
                instructions: [
                    {
                        details: "Rozpuść masło w garku.",
                        cookingPhase: CookingPhase.Sauce1,
                    },
                ]
            },
            {
                name: IngredientName.Mustard,
                quantity: 5,
                quantityDescription: "1 łyżeczka musztardy",
                nutritionalValue: getNutritionValue(IngredientName.Mustard),
                instructions: [
                    {
                        details: "Dodaj musztardę do garka i wymieszaj.",
                        cookingPhase: CookingPhase.Sauce2,
                    },
                ]
            },
            {
                name: IngredientName.WheatFlour,
                quantity: 30,
                quantityDescription: "2 płaskie łyżki mąki pszennej",
                nutritionalValue: getNutritionValue(IngredientName.WheatFlour),
                instructions: [
                    {
                        details: "Dodaj mąkę do garka i wymieszaj.",
                        cookingPhase: CookingPhase.Sauce2,
                    },
                ]
            },
            {
                name: IngredientName.Milk,
                quantity: 600,
                quantityDescription: "600ml mleka",
                nutritionalValue: getNutritionValue(IngredientName.Milk),
                instructions: [
                    {
                        details: "Stopniowo dodawaj mleko do garka i mieszaj, aż sos zgęstnieje.",
                        cookingPhase: CookingPhase.Sauce2,
                    },
                ]
            },
            {
                name: IngredientName.CheddarCheese,
                quantity: 300,
                quantityDescription: "300g startego sera cheddar",
                nutritionalValue: getNutritionValue(IngredientName.CheddarCheese),
                instructions: [
                    {
                        details: "Jeśli sos się zagotuje, odstaw z ognia i dodaj starty ser cheddar. Mieszaj, aż ser się rozpuści.",
                        cookingPhase: CookingPhase.Preparation2,
                    },
                ]
            },
        ]
    }
;