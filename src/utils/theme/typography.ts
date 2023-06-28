import { TextStyle } from "react-native";
import { ThemeColors } from "./colors";

export type TitleVariants = "title1" | "title2" | "title3" | "title4" | "title5" | "title6";

export type TypographyProps = { [key in TitleVariants]: TextStyle };


const typography: TypographyProps = {
    title1: {
        fontSize: 22,
        fontWeight: "700",
    },
    title2: {
        fontSize: 13,
        fontWeight: "500",
    },
    title3: {
        fontSize: 11,
        fontWeight: "300",
    },
    title4: {
        fontSize: 19,
        fontWeight: "700",
    },
    title5: {
        fontSize: 15,
        fontWeight: "700",
    },
    title6: {
        fontSize: 17,
        fontWeight: "700",
    }
}

export const typographyWithColor = (colors: ThemeColors) => ({
    title1: {
        color: colors.primary,
        ...typography.title1,
    },
    title2: {
        color: colors.secondary,
        ...typography.title2,
    },
    title3: {
        color: colors.tertiary,
        ...typography.title3,
    },
    title4: {
        color: colors.secondary,
        ...typography.title4
    },
    title5: {
        color: colors.secondary,
        ...typography.title5
    },
    title6: {
        color: colors.secondary,
        ...typography.title6
    },
})