export async function getTrainerMeals(token) {
  const response = await fetch(
    "https://profit-qjbo.onrender.com/api/v1/Meal/",
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
