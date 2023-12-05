import type {Recipe} from "@/service/puzzle/types";

function getImageUrl(name: string): string {
    return new URL(`../../../assets/photos/${name}`, import.meta.url).href
}

export const getRecipesData = (): Recipe[] => {

    const recipes: Recipe[] = [
        {
            name: "Kurczak curry",
            imageUrl: getImageUrl("curry-chicken.jpg"),
            slug: "curry-chicken",
            shortDescription: "Szybkie danie z piersi z kurczaka doprawione curry",
            tags: ["kurczak", "curry", "indyjskie", "szybkie", "nowe"]
        }];
    const numberOfSoon = 19;
    for (let i = 0; i < numberOfSoon; i++) {
        recipes.push(
            {
                name: "Wkrótce",
                imageUrl: "https://picsum.photos/1000/1000/?random&i=" + i,
                slug: "soon-" + i,
                shortDescription: "soon-desc-" + i,
                tags:["soon"]
            })
    }

    return recipes;
}