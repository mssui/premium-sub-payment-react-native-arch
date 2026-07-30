import { ApiError, HttpStatus } from "@/api/ApiError";
import type { User } from "@/types/user";
import { http } from "./httpClient";


export function getCurrentUser() {
    try {
        return http.get<User>("/me");
    } catch (error) {
        if (error instanceof ApiError) {
            switch (error.status) {
                case HttpStatus.Unauthorized:
                    // Redirect to login
                    break;

                case HttpStatus.NotFound:
                    // User hasn't been created yet
                    break;

                case HttpStatus.InternalServerError:
                    // Show generic error
                    break;
            }

        }

    }
}