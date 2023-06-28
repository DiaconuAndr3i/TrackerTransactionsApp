import { colors, ThemeColors } from "./colors";
import { SpacerIndex, spacing } from "./spacing";
import { typographyWithColor, TypographyProps } from "./typography";

export const Theme = {
    colors: {...colors},
    spacing,
    typography: typographyWithColor(colors),
};

export type AppTheme = {
    colors: ThemeColors;
    spacing: (index: SpacerIndex) => void;
    typography: TypographyProps;
}