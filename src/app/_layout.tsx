import "../../global.css";

import { AuthProvider } from "@/contexts/AuthContext";

import { QueryProvider } from "@/providers/QueryProvider";
import { Stack, useRouter, useSegments } from "expo-router";



import { useEffect } from "react";

import { useAuth } from "@/hooks/useAuth";

function AuthGate() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      return;
    }

    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("/(auth)/login");
    }

    if (user && inAuthGroup) {
      router.replace("/(drawer)");
    }

  }, [user, loading, segments]);

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}

export default function RootLayout() {
  return (
     <QueryProvider>
    <AuthProvider>
        <AuthGate />
    </AuthProvider>
     </QueryProvider>
  );
}
