import { Avatar } from "@/components/display";
import { Text } from 'react-native';

import { Card, Screen } from '@/components/layout';

import { useAuth } from "@/hooks/useAuth";

export default function ProfileScreen() {
  const { user } = useAuth();

  return (
    <Screen>

      {user?.photoURL && (
        <Avatar user={user} />
      ) || null}

      <Card>
        <Text className="text-xl font-bold">
          {user?.displayName ?? "Unknown User"}
        </Text>

        <Text>
          {user?.email}
        </Text>

        <Text>
          {user?.providerData[0]?.providerId}
        </Text>
      </Card>

    </Screen>
  );
}