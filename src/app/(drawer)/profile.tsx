import { Avatar } from "@/components/display";
import { Text } from 'react-native';

import { Card, Screen } from '@/components/layout';
import { useAuth } from "@/hooks/useAuth";

import { useCurrentUser } from "@/hooks/queries/useCurrentUser";

export default function ProfileScreen() {

  const {
    data: user,
    isLoading,
    error,
} = useCurrentUser();

  const { firebaseUser } = useAuth();

  return (
    <Screen>

      {firebaseUser?.photoURL && (
        <Avatar user={firebaseUser} />
      ) || null}

      <Card>
        <Text className="text-xl font-bold">
          {firebaseUser?.displayName ?? "Unknown User"}
        </Text>

        <Text>
          {user?.email}
        </Text>

        <Text>
          {firebaseUser?.providerData[0]?.providerId}
        </Text>
      </Card>

    </Screen>
  );
}