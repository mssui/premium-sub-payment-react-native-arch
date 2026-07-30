import { ApiError } from "@/api/ApiError";
import { NetworkError } from "@/api/NetworkError";

import { env } from "@/config/env";
import { auth } from "@/integrations/firebase/config";


async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {

  const user = auth.currentUser;
  const token = await user?.getIdToken();

  try {

    const response = await fetch(`${env.apiUrl}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const body = await response.json().catch(() => undefined);

      throw new ApiError(
        response.status,
        body?.message ?? response.statusText,
        body,
      );
    }

    const body: T = await response.json();

    return body;

  }
  catch (error) {
    // API failure only
    if (error instanceof ApiError) {
      throw error;
    }

    // network failure only
    throw new NetworkError();
  }
}


export const http = {
  get<T>(endpoint: string) {
    return request<T>(endpoint);
  },

  post<T>(endpoint: string, body?: unknown) {
    return request<T>(endpoint, {
      method: "POST",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  },

  put<T>(endpoint: string, body?: unknown) {
    return request<T>(endpoint, {
      method: "PUT",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  },

  patch<T>(endpoint: string, body?: unknown) {
    return request<T>(endpoint, {
      method: "PATCH",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  },

  delete<T>(endpoint: string) {
    return request<T>(endpoint, {
      method: "DELETE",
    });
  },
};