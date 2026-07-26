import { TextStyle } from "react-native";

export const typography = {
    title: {
        fontSize: 28,
        fontWeight: "700",
    },

    heading: {
        fontSize: 22,
        fontWeight: "600",
    },

    body: {
        fontSize: 16,
    },

    caption: {
        fontSize: 13,
    },

    button: {
        fontSize: 16,
        fontWeight: "600",
    },
} satisfies Record<string, TextStyle>;