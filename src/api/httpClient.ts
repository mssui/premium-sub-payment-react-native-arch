import { auth } from "@/integrations/firebase/config";

const API_URL = "http://localhost:3001";

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const user = auth.currentUser;
  console.log("Current user:", user?.email);

  const token = await user?.getIdToken();
  console.log("Token exists:", !!token);

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}