import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../../../../utils/constants";
import { getAllMeals } from "../../../../../services/apiMeals";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useGetAllMeals() {
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();
    const { userId, userToken } = useCurrentUser();
    const page = !searchParams.get("page")
      ? 1
      : Number(searchParams.get("page"));

    const { data: allMeals, isLoading } = useQuery({
      queryKey: ["allMeals", userId, page], // unique string to identify the request
      queryFn: () => getAllMeals(userToken, page),
    });

    //PRE-FETCHING
    const pageCount = Math.ceil(allMeals?.count / PAGE_SIZE);
    if (page < pageCount) {
      queryClient.prefetchQuery({
        queryKey: ["allMeals", userId, page + 1], // unique string to identify the request
        queryFn: () => getAllMeals(userToken, page + 1),
      });
    }

    if (page > 1) {
      queryClient.prefetchQuery({
        queryKey: ["allMeals", userId, page - 1], // unique string to identify the request
        queryFn: () => getAllMeals(userToken, page - 1),
      });
    }

    return {
      isLoading,
      allMeals: allMeals?.data,
      count: allMeals?.totalDocuments,
    };
}
