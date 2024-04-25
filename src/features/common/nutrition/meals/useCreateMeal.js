import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../context/UserProvider";
import toast from "react-hot-toast";
import { createMeal as apiCreateMeal } from "../../../../services/apiMeals";

export function useCreateMeal() {
     const queryClient = useQueryClient();
     const { userToken } = useCurrentUser();
     const { mutate: createMeal, isPending: isCreating } = useMutation({
       mutationFn: (mealData) => apiCreateMeal(userToken, mealData),
       onSuccess: ({ message }) => {
         toast.success(message);
         queryClient.invalidateQueries(["trainerMeals"]);
       },
       onError: (err) => toast.error(err.message),
     });
     return { createMeal, isCreating }; 
}

export default useCreateMeal
