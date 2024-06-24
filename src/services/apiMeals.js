import { PAGE_SIZE_MEALS } from "../utils/constants";

export async function getAppMeals(token, page) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/Meal/?page=${page}&limit=${PAGE_SIZE_MEALS}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function getTrainerMeals(token, page, QueryParams) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/Meal/AllMeals/?page=${page}&limit=${PAGE_SIZE_MEALS}&${QueryParams}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function getSpecificMeal(token, id) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/Meal/${id}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function createMeal(token, mealData) {
  const response = await fetch("https://pro-fit.onrender.com/api/v1/Meal/", {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mealData),
  });
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function updateMeal(id, token, mealData) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/Meal/${id}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mealData),
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function deleteMeal(id, token) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/Meal/${id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}
