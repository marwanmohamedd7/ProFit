export async function getPendingTrainers(token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/admin/trainers/PendingTrainers",
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
