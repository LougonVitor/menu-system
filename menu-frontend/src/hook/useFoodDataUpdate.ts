import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData";
/* import { FoodData } from '../interface/FoodData' */

const API_URL = 'http://localhost:8080';

const updateData = async(data : FoodData): AxiosPromise<any> => {
    const response = axios.put(API_URL + '/food', data);
    return response;
}

export function useFoodDataUpdate() {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: updateData,
        retry: 1,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['food-data']})
        },
        onError: (error) => {
            console.error(`Failed to update food: ${error}`)
        }
    })

    return mutate;
}