export async function getPendingTrainers(token) {
  const response = await fetch(
    "https://profit-qjbo.onrender.com/api/v1/admin/trainers/PendingTrainers",
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

export async function getPendingTrainerInfo(id, token) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/admin/trainers/personalinfo/${id}`,
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

export async function getPendingTrainerProfessionalCred(id, token) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/admin/trainers/ProfessionalCredentials/${id}`,
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

export async function getPendingTrainerClientsTransformation(id, token) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/admin/trainers/ClientTransformations/${id}`,
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

export async function getPendingTrainerQualificationsAndAchievements(
  id,
  token
) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/admin/trainers/QualificationsAndAchievements/${id}`,
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

export async function getPendingTrainerPackages(id, token) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/admin/trainers/packages/${id}`,
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

export async function getPendingTrainerInfoBar(id, token) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/admin/trainers/TrainerInfoBar/${id}`,
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

export async function pendingTrainerAcceptOrReject(userData, id, token) {
  const response = await fetch(
    `https://profit-qjbo.onrender.com/api/v1/admin/trainers/adminApprove/${id}`,
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
