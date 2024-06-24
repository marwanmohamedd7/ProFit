export async function getTrainerChats(token) {
  const response = await fetch(
    "https://pro-fit.onrender.com/api/v1/chat/conversations",
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

export async function getChatMessages(id, token) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/chat/conversations/${id}/messages`,
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

export async function sendChatMessage(id, formData, token) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/chat/conversations/${id}/messages`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}
