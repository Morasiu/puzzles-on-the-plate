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
};

export const getNutritionValue = (name: IngredientName): NutritionalValue => {
    return nutritionValues[name];
}

