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