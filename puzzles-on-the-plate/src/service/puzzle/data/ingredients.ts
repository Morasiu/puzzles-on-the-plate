import type {NutritionalValue} from "@/service/puzzle/types";
import {IngredientName} from "@/service/puzzle/data/IngredientName";

const nutritionValues: { [key in IngredientName]: NutritionalValue } = {
    CoconutCream: {
        calories: 215,
        totalFat: 21,
        saturatedFat: 4.8,
        sodium: 0.03,
        totalCarbohydrate: 4.8,
        sugar: 1.9,
    },
    Chicken: {
        calories: 136,
        totalFat: 3,
        saturatedFat: 0.6,
        cholesterol: 0.082,
        sodium: 0.051,
        protein: 25
    },
    RedPepper: {
        calories: 28,
        totalCarbohydrate: 6.7,
        sugar: 4.4,
        protein: 0.9
    },
    WhiteRice: {
        calories: 130,
        totalCarbohydrate: 28,
        protein: 2.7
    },
    Curry: {
        calories: 104,
        totalFat: 4.6,
        saturatedFat: 0.6,
        cholesterol: 0.032,
        sodium: 0.031,
        totalCarbohydrate: 3.2,
        sugar: 0.9,
        protein: 12,
    },
    Honey: {
        calories: 304,
        totalCarbohydrate: 82,
        sugar: 82,
        protein: 0.3,
    },
    MapleSyrup: {
        calories: 260,
        totalCarbohydrate: 67,
        sugar: 60,
    },
    Tofu: {
        calories: 83,
        totalFat: 5.3,
        saturatedFat: 0.9,
        sodium: 0.004,
        totalCarbohydrate: 1.2,
        sugar: 0.7,
        protein: 10,
    },
    Potato: {
        calories: 161,
        totalFat: 0.2,
        saturatedFat: 0.1,
        sodium: 0.017,
        totalCarbohydrate: 37,
        sugar: 2,
        protein: 4.3,
    },
    Garlic: {
        calories: 149,
        totalFat: 0.5,
        saturatedFat: 0.1,
        totalCarbohydrate: 33,
        protein: 6.4,
    },
    WorcestershireSauce: {
        calories: 78,
        totalCarbohydrate: 19,
        sodium: 0.980
    },
    OliveOil: {
        calories: 884,
        totalFat: 128,
        saturatedFat: 14,
        sodium: 0.002,
    },
    Salt: {
        sodium: 38758,
    },
    SweetPepper: {
        calories: 374,
        totalFat: 3,
        sodium: 0.480,
        totalCarbohydrate: 69,
        sugar: 41,
        protein: 18,
    },
    MozzarellaCheese: {
        calories: 80,
        totalFat: 6,
        saturatedFat: 3,
        sodium: 0.180,
        totalCarbohydrate: 2,
        sugar: 1,
        protein: 6,
    },
    SweetPotato: {
        calories: 90,
        totalFat: 0.2,
        sodium: 0.36,
        totalCarbohydrate: 21,
        sugar: 6.5,
        protein: 2,
    },
    Onion: {
        calories: 44,
        totalFat: 0.2,
        sodium: 0.3,
        totalCarbohydrate: 10,
        sugar: 4.7,
        protein: 1.4,
    },
    Carrot: {
        calories: 35,
        totalFat: 0.2,
        sodium: 0.58,
        totalCarbohydrate: 8.2,
        sugar: 3.5,
        protein: 0.8,
    },
    CheddarCheese: {
        calories: 404,
        totalFat: 33,
        saturatedFat: 19,
        cholesterol: 0.105,
        sodium: 0.621,
        totalCarbohydrate: 3.1,
        sugar: 0.5,
        protein: 25,
    },
    Butter: {
        calories: 717,
        totalFat: 81,
        saturatedFat: 51,
        cholesterol: 0.215,
        sodium: 0.647,
        totalCarbohydrate: 0.1,
        sugar: 0.1,
        protein: 1,
    },
    Mustard: {
        calories: 66,
        totalFat: 3.4,
        saturatedFat: 0.2,
        sodium: 0.2,
        totalCarbohydrate: 6,
        sugar: 3.5,
        protein: 3.2,
    },
    WheatFlour: {
        calories: 364,
        totalFat: 1.2,
        sodium: 0.002,
        totalCarbohydrate: 76,
        sugar: 0.4,
        protein: 10,
    },
    Milk: {
        calories: 50,
        totalFat: 2,
        saturatedFat: 1.3,
        cholesterol: 0.008,
        sodium: 0.044,
        totalCarbohydrate: 5,
        sugar: 5,
        protein: 3,
    },
};

export const getNutritionValue = (name: IngredientName): NutritionalValue => {
    return nutritionValues[name];
}

