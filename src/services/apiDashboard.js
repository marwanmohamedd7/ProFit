/////////// dashboard trainer data
export async function getTrainerDashboardPerformanceMetrics(token, filter) {
  const filterValue = !filter || filter === "All" ? "" : `?days=${filter}`;
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/trainers/Dashboard/performanceMetrics${filterValue}`,
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

export async function getTrainerDashboardData(token) {
  const response = await fetch(
    "https://pro-fit.onrender.com/api/v1/trainers/Dashboard/getDashboardData",
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

export async function getDashboardTraineesAssessments(token) {
  const response = await fetch(
    "https://pro-fit.onrender.com/api/v1/trainers/Dashboard/getActiveReadyAssessmentTraineesDashboard",
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

/////////// dashboard admin data
export async function getAdminDashboardPerformanceMetrics(token, filter) {
  const filterValue = !filter || filter === "All" ? "" : `?days=${filter}`;
  const response = await fetch(
    `https://pro-fit.onrender.com/api/v1/admin/Dashboard/performanceMetrics${filterValue}`,
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

export async function getAdminDashboardData(token) {
  const response = await fetch(
    "https://pro-fit.onrender.com/api/v1/admin/Dashboard/getDashboardData",
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
