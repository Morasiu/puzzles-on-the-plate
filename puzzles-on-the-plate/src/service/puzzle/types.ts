import type {CookingPhase} from "@/service/puzzle/data/CookingPhase";
import type {IngredientName} from "@/service/puzzle/data/IngredientName";

export type Recipe = {
    imageUrl: string,
    tags: string[],
    servings: number,
    ingredients: Ingredient[],
    puzzles: Puzzle[],
}

export type Puzzle = {
    name: string,
    slug: string,
    shortDescription: string,
    ingredients: IngredientName[],
}

export type Ingredient = {
    name: IngredientName,
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