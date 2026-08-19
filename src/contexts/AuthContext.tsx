import { User } from "firebase/auth";
import {
    createContext,
    useEffect,
    useState
} from "react";
import {
    logout,
    subscribeToAuthChanges,
} from "../integrations/firebase/auth";

type AuthContextType = {
    firebaseUser: User | null;
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
    const [firebaseUser, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("AuthProvider mounted");

        const unsubscribe =
            subscribeToAuthChanges((firebaseUser) => {

                console.log("Firebase auth changed");
                console.log("firebaseUser:", firebaseUser);

                setUser(firebaseUser);
                setLoading(false);
            });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider
            value={{
                firebaseUser,
                loading,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}