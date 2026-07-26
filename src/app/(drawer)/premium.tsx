import { Pressable, Text, View } from 'react-native';


export default function PremiumScreen() {
    //const { user } = useAuth();

    return (
        <View className="flex-1 items-center justify-center bg-white p-6">

            <Text className="mt-2 text-gray-500 ">
                Enjoy the following benefits with your premium subscription:

            </Text>

            {/* <Text className="mt-6 text-2xl font-bold">
                <ul className="list-disc">
                    <li>✓ AI Assistant</li>
                    <li>✓ Cloud Sync</li>
                    <li>✓ Unlimited Projects</li>
                    <li>✓ Future Features</li>
                </ul>
            </Text> */}

            <Text className="mt-6 text-2xl font-bold">
                Current Plan: Free
            </Text>

            <Pressable
                className="bg-white rounded-2xl p-4 shadow-sm shadow-black/10 border border-gray-100 mx-4 my-2 flex-col"
                onPress={() => console.log('Card Pressed')}
            >

                <Text className="mt-6 text-2xl font-bold">
                    Upgrade to Premium
                </Text>
            </Pressable>

        </View>
    );
}