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
    quantity: number,
    quantityDescription: string,
    nutritionalValue: NutritionalValue
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