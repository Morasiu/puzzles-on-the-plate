import type {Recipe} from "@/service/puzzle/types";
import {getRecipesData} from "@/service/puzzle/data/recipes";
import type {AxiosResponse, InternalAxiosRequestConfig} from "axios";

export const getRecipes = async (): Promise<AxiosResponse<Recipe[], any>> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
        data: getRecipesData(),
        status: 200,
        statusText: "OK",
        headers: {},
        config: {} as InternalAxiosRequestConfig
    };
};

export const getRecipe = async (slug: string): Promise<AxiosResponse<Recipe | undefined, any>> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const recipe = getRecipesData().find(x => x.puzzles.find(p => p.slug == slug) !== undefined);
    return {
        data: recipe,
        status: recipe === undefined ? 404 : 200,
        statusText: "OK",
        headers: {},
        config: {} as InternalAxiosRequestConfig
    };
};