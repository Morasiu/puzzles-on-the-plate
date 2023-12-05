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
    }
};

export const getNutritionValue = (name: IngredientName): NutritionalValue => {
    return nutritionValues[name];
}

