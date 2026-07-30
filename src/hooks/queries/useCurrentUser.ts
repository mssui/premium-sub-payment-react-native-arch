import { queryKeys } from "@/api/queryKeys";
import { getCurrentUser } from "@/api/user";
import { useQuery } from "@tanstack/react-query";

export function useCurrentUser() {
    return useQuery({
        queryKey: queryKeys.currentUser,
        queryFn: getCurrentUser,
    });
}