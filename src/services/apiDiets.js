import { PAGE_SIZE_MEALS } from "../utils/constants";

export async function getDietTemplates(token, page) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Nutrition/Myplans/?page=${page}&limit=${PAGE_SIZE_MEALS}`,
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

export async function getDietFreePlans(token, page) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Nutrition/FreePlans?page=${page}&limit=${PAGE_SIZE_MEALS}`,
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

export async function getSpecificDietTemplate(token, id) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Nutrition/${id}`,
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

export async function createDietTemplate(token, dietData) {
  const response = await fetch(
    "https://profit-qjbo.onrender.com/api/v1/Nutrition/",
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dietData),
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function updateDietTemplate(id, token, dietData) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Nutrition/${id}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dietData),
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function deleteDietTemplate(id, token) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/Nutrition/${id}`,
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