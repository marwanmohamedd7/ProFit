import { PAGE_SIZE } from "../utils/constants";

export async function getAppMeals(token, page) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Meal/?page=${page}&limit=${PAGE_SIZE}`,
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

export async function getTrainerMeals(token, page) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Meal/TrainerMeals/?page=${page}&limit=${PAGE_SIZE}`,
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

export async function getAllMeals(token, page) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Meal/AllMeals/?page=${page}&limit=${PAGE_SIZE}`,
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

export async function getSpecificMeals(token, id) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Meal/${id}`,
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
  const response = await fetch(
    "https://profit-qjbo.onrender.com/api/v1/Meal/",
    {
      method: "POST",
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

export async function updateMeal(id, token, mealData) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Meal/${id}`,
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
    `https://profit-qjbo.onrender.com/api/v1/Meal/${id}`,
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
