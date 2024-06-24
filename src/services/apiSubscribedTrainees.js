import { PAGE_SIZE_DEFAULT } from "../utils/constants";

export async function getSubscribedTrainees(token, page, filter) {
  const filterValue = !filter || filter === "All" ? "" : `&status=${filter}`;
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/getActiveTrainees?page=${page}&limit=${PAGE_SIZE_DEFAULT}${filterValue}`,
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

export async function getSubscribedTraineesAssessment(token, page, filter) {
  const filterValue = !filter || filter === "All" ? "" : `&status=${filter}`;
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/getTraineesDietAssessment?page=${page}&limit=${PAGE_SIZE_DEFAULT}${filterValue}`,
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

export async function getDietAssessmentSettingsForm(token, id) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/getTraineeDietAssessment/${id}`,
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

export async function getSubscribedTraineeCommitments(token, id) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/trackingTraineePlans/${id}`,
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

export async function getSubscribedTraineePerformances(token, id) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/trainee-data/${id}`,
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

export async function doRequestAssessment(token, id) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/makeRequestAssessment/${id}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function getSpecificSubscribedTrainee(token, id) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/getSpecificTrainee/${id}`,
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

export async function getTraineeAllCustomizePlans(token, id, page) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/getAllCustomizePlans/${id}?page=${page}`,
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

export async function getTraineeCustomizePlan(token, id) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/getTraineeCustomizePlan/${id}`,
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

export async function createTraineeCustomizePlan(token, dietData, id) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/createTraineeCustomizePlan/${id}`,
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

export async function getTraineeSubscriptions(token, id, page) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/getTraineesSubscription/${id}?page=${page}`,
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

export async function getTraineeProgressPhotos(token, id) {
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/trainees/progress/${id}`,
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
