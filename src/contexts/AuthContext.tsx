import { User } from "firebase/auth";
import {
    createContext,
    useEffect,
    useState
} from "react";
import {
    logout,
    subscribeToAuthChanges,
} from "../app/integrations/firebase/auth";

type AuthContextType = {
    user: User | null;
    loading: boolean;
    logout: () => Promise<void>;
};

export const AuthContext =
    createContext<AuthContextType | null>(null);

export const AuthProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("AuthProvider mounted");

        const unsubscribe =
            subscribeToAuthChanges((user) => {

                console.log("Firebase auth changed");
                console.log("User:", user?.email);

                setUser(user);
                setLoading(false);
            });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}