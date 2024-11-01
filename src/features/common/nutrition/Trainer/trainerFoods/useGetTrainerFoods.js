import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE_DEFAULT } from "../../../../../utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTrainerFoods } from "../../../../../services/apiFoods";
import { useCurrentUser } from "../../../../../context/UserProvider";

export function useGetTrainerFoods() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const { userId, userToken } = useCurrentUser();
  const searchKeyword = searchParams.get("keyword") || "";
  const filterValues = searchParams.get("filter")
    ? JSON.parse(searchParams.get("filter"))
    : ``;
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const food = !searchParams.get("food")
    ? "allFoods"
    : searchParams.get("food");

  const { data: trainerFoods, isLoading } = useQuery({
    queryKey: ["trainerFoods", userId, page, food, searchKeyword, filterValues], // unique string to identify the request
    queryFn: () =>
      getTrainerFoods(userToken, page, food, searchKeyword, filterValues),
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(trainerFoods?.totalDocuments / PAGE_SIZE_DEFAULT);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: [
        "trainerFoods",
        userId,
        page + 1,
        food,
        searchKeyword,
        filterValues,
      ], // unique string to identify the request
      queryFn: () =>
        getTrainerFoods(userToken, page + 1, food, searchKeyword, filterValues),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: [
        "trainerFoods",
        userId,
        page - 1,
        food,
        searchKeyword,
        filterValues,
      ], // unique string to identify the request
      queryFn: () =>
        getTrainerFoods(userToken, page - 1, food, searchKeyword, filterValues),
    });
  }

  return {
    isLoading,
    trainerFoods: trainerFoods?.data ?? [],
    count: trainerFoods?.totalDocuments,
    allTrainerFoods: trainerFoods?.allData ?? [],
  };
}
