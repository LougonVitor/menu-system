import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
/* import { FoodData } from '../interface/FoodData' */

const API_URL = 'http://localhost:8080';

const deleteData = async(id?: number): AxiosPromise<any> => {
    const response = axios.delete(API_URL + '/food' + `/${id}`);
    return response;
}

export function useFoodDataDelete() {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 1,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['food-data']})
        },
        onError: (error) => {
            console.error(`Failed to delete food: ${error}`)
        }
    })

    return mutate;
}