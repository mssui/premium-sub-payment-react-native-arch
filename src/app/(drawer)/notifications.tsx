import { Button } from '@/components/inputs';
import { useAuth } from '@/hooks/useAuth';
import { Text, View } from 'react-native';


export default function NotificationsScreen() {
    const { user } = useAuth();

    return (
        <View className="flex-1 items-center justify-center bg-white p-6">

            <Text className="mt-2 text-gray-500">
                NOTIFICATIONS PAGE
            </Text>

            <Button variant="primary">
                Stuff 1
            </Button>

            <Button variant="secondary">
                Stuff 2
            </Button>

            <Button variant="danger">
                Stuff 3
            </Button>

        </View>
    );
}