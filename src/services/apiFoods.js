import { PAGE_SIZE_DEFAULT } from "../utils/constants";

export async function getAppFoods(token, page) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Food/?page=${page}&limit=${PAGE_SIZE_DEFAULT}`,
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

export async function getTrainerFoods(token, page, QueryParams) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Food/AllFoods/?page=${page}&limit=${PAGE_SIZE_DEFAULT}&${QueryParams}`,
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

export async function createFood(token, foodData) {
  const response = await fetch("https://profit-qjbo.onrender.com/api/v1/Food", {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: foodData,
  });
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function updateFood(id, token, foodData) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Food/${id}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: foodData,
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function deleteFood(id, token) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Food/${id}`,
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
