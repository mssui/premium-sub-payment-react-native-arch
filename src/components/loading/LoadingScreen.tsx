import { Text, View } from 'react-native';

export default function LoadingScreen() {

    return (
        <View className="flex-1 items-center justify-center bg-white p-6">

            <Text className="mt-2 text-gray-500">
                Loading...
            </Text>

        </View>
    );
}