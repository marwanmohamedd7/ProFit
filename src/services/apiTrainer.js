import { PAGE_SIZE_DEFAULT } from "../utils/constants";

export async function getUserAbout(token) {
  const response = await fetch(
    "https://pro-fit.onrender.com/api/v1/trainers/trainer_about",
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

export async function updateUserAbout(userData, token) {
  const response = await fetch(
    "https://pro-fit.onrender.com/api/v1/trainers/update_trainer_about",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function getTrainerTranscations(token, page, filter) {
  const filterValue = !filter || filter === "All" ? "" : `&status=${filter}`;
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/AllSubscriptions?page=${page}&limit=${PAGE_SIZE_DEFAULT}${filterValue}`,
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
