import { User } from "firebase/auth";
import { http } from "./httpClient";


export function getCurrentUser() {
    return http.get<User>("/me");
}