export async function signUp(signUpData) {
  const response = await fetch("http://localhost:9000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
  });
  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}
