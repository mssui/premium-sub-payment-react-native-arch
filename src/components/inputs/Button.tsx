import { theme } from "@/theme";
import { Pressable, Text } from 'react-native';


const variants = {
    primary: {
    backgroundColor: theme.colors.primary,
    textColor: "#FFFFFF",
  },

  secondary: {
    backgroundColor: theme.colors.surface,
    textColor: theme.colors.text,
  },

  danger: {
    backgroundColor: theme.colors.danger,
    textColor: "#FFFFFF",
  },
};

type ButtonVariant = keyof typeof variants;

type ButtonProps = {
    children: React.ReactNode;

    onPress?: () => void;

    variant?: ButtonVariant;

    size?: "sm" | "md" | "lg";

    loading?: boolean;

    disabled?: boolean;

    fullWidth?: boolean;
};

export default function Button({ children,
    onPress,
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    fullWidth = false }: ButtonProps) {
    const currentVariant =
        variants[variant ?? "primary"];
    return (
        <Pressable
            className="bg-white rounded-2xl shadow-sm shadow-black/10 border border-gray-100 mx-4 my-2 flex-col"
            onPress={onPress}
            style={{
                padding: theme.spacing.md,
                
                backgroundColor: currentVariant.backgroundColor,
                borderRadius: theme.radius.button,
            }}
        >
            <Text style={{
                ...theme.typography.button,
                color: currentVariant.textColor,
            }}>
                {children}
            </Text>
        </Pressable>

    );
}