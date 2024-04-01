export async function setPersonalInfo(formData, token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/trainers/profile_1",
    {
      method: "PATCH",
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

export async function getPersonalInfo(token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/trainers/TrainerInfo",
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

export async function getProfileCredentials(token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/trainers/ProfessionalCredentials",
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

export async function setProfileCredentials(credData, token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/trainers/profile_2",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(credData),
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function getQualifications(token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/trainers/qualificationAndAchievement/",
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

export async function addQualification(formData, token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/trainers/qualificationAndAchievement/",
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

export async function deleteQualification(id, token) {
  const response = await fetch(
    `https://profit-07pc.onrender.com/api/v1/trainers/qualificationAndAchievement/${id}`,
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

export async function getTransformations(token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/trainers/ClientTransformations",
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok)
    throw new Error("Server error! Can't retrieve transformations.");
  const data = await response.json();
  return data;
}

export async function createTransformation(formData, token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/trainers/ClientTransformations",
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );
  if (!response.ok)
    throw new Error("Server error! Can't create transformation.");
  const data = await response.json();
  return data;
}

export async function deleteTransformation(id, token) {
  const response = await fetch(
    `https://profit-07pc.onrender.com/api/v1/trainers/ClientTransformations/${id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok)
    throw new Error("Server error! Can't delete transformation.");
  const data = await response.json();
  return data;
}

export async function updateTransformation(formData, id, token) {
  const response = await fetch(
    `https://profit-07pc.onrender.com/api/v1/trainers/ClientTransformations/${id}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );
  if (!response.ok)
    throw new Error("Server error! Can't update transformation.");
  const data = await response.json();
  return data;
}

export async function getPackages(token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/trainers/packages",
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) throw new Error("Server error! Can't retrieve packages.");
  const data = await response.json();
  return data;
}

export async function createPackage(packageData, token) {
  const response = await fetch(
    "https://profit-07pc.onrender.com/api/v1/trainers/packages",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(packageData),
    }
  );
  if (!response.ok) throw new Error("Server error! Can't create package.");
  const data = await response.json();
  return data;
}

export async function deletePackage(id, token) {
  const response = await fetch(
    `https://profit-07pc.onrender.com/api/v1/trainers/packages/${id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) throw new Error("Server error! Can't delete package.");
  const data = await response.json();
  return data;
}

export async function updatePackage(updatedPackageData, id, token) {
  const response = await fetch(
    `https://profit-07pc.onrender.com/api/v1/trainers/packages/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedPackageData),
    }
  );
  if (!response.ok) throw new Error("Server error! Can't update package.");
  const data = await response.json();
  return data;
}

export async function submitProfile(submitionData, token) {
  const response = await fetch(
    `https://profit-07pc.onrender.com/api/v1/trainers/submitionrequests`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(submitionData),
    }
  );
  if (!response.ok) throw new Error("Server error! Can't submit your profile.");
  const data = await response.json();
  return data;
}
