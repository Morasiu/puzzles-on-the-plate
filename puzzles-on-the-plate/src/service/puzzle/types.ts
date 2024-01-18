import type {CookingPhase} from "@/service/puzzle/data/CookingPhase";

export type Recipe = {
    name: string,
    imageUrl: string,
    slug: string,
    shortDescription: string,
    tags: string[],
    ingredients: Ingredient[]
}

export type Ingredient = {
    name: string,
    // In g
    quantity: number,
    quantityDescription: string,
    nutritionalValue: NutritionalValue,
    instructions: Instruction[],
}

export type Instruction = {
    cookingPhase: CookingPhase,
    details: string
}

export type NutritionalValue = {
    calories?: number;
    totalFat?: number;
    saturatedFat?: number;
    cholesterol?: number;
    totalCarbohydrate?: number;
    sugar?: number;
    protein?: number;
    sodium?: number;
}