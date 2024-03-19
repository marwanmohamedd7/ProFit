export async function setPersonalInfo(personalData) {
  const response = await fetch("http://localhost:9000/personalInfo/e540", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personalData),
  });
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function getPersonalInfo() {
  const response = await fetch("http://localhost:9000/personalInfo/e540");
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function getProfileCredentials() {
  const response = await fetch("http://localhost:9000/professionalCred/022f");
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function setProfileCredentials(profileData) {
  const response = await fetch("http://localhost:9000/professionalCred/022f", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  });
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function getTransformations() {
  const response = await fetch("http://localhost:9000/clientsTransformation");
  if (!response.ok)
    throw new Error("Server error! Can't retrieve transformations.");
  const data = await response.json();
  return data;
}

export async function createTransformation(transformationData) {
  const response = await fetch("http://localhost:9000/clientsTransformation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transformationData),
  });
  if (!response.ok)
    throw new Error("Server error! Can't create transformation.");
  return response;
}

export async function deleteTransformation(id) {
  const response = await fetch(
    `http://localhost:9000/clientsTransformation/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok)
    throw new Error("Server error! Can't delete transformation.");
  const data = await response.json();
  return data;
}

export async function updateTransformation(transformationData, id) {
  const response = await fetch(
    `http://localhost:9000/clientsTransformation/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transformationData),
    }
  );
  if (!response.ok)
    throw new Error("Server error! Can't update transformation.");
  const data = await response.json();
  return data;
}

export async function getPackages() {
  const response = await fetch("http://localhost:9000/packages");
  if (!response.ok) throw new Error("Server error! Can't retrieve packages.");
  const data = await response.json();
  return data;
}

export async function createPackage({
  price,
  active,
  duration,
  packageName,
  description,
  packageType,
  subscribersLimit,
}) {
  const response = await fetch("http://localhost:9000/packages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      price,
      active,
      duration,
      description,
      packageName,
      packageType,
      subscribersLimit,
    }),
  });
  if (!response.ok) throw new Error("Server error! Can't create package.");
  const data = await response.json();
  return data;
}

export async function deletePackage(id) {
  const response = await fetch(`http://localhost:9000/packages/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Server error! Can't delete package.");
  const data = await response.json();
  return data;
}

export async function updatePackage(updatedPackageData, id) {
  const response = await fetch(`http://localhost:9000/packages/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPackageData),
  });
  if (!response.ok) throw new Error("Server error! Can't update package.");
  const data = await response.json();
  return data;
}
