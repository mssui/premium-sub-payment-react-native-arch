import { Image } from 'react-native';


export default function SectionTitle(user: any) {
    // const { user } = useAuth();

    return (
        <>

            {user?.photoURL && (
                <Image
                    source={{ uri: user.photoURL }}
                    className="w-28 h-28 rounded-full"
                />
            ) || null}

        </>
    );
}