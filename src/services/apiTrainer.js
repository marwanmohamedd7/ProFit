export async function getUserAbout(token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/trainers/trainer_about",
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
    "https://profit-07pc.onrender.com/api/v1/trainers/update_trainer_about",
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

export async function getAppFoods(token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/Food/",
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

export async function getTrainerFoods(token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/Food/TrainerFood",
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