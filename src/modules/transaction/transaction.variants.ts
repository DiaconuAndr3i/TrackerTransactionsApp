import { TextStyle, ViewStyle } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import { TransactionVariants } from "./transaction.component";
import { spacing } from "../../utils/theme/spacing";

type TransactionVariant = {
    container?: ViewStyle,
    text1?: TextStyle
    text2?: TextStyle
    text3?: TextStyle
    iconAndTexts?: ViewStyle
    texts?: ViewStyle
    iconView?: ViewStyle
}

export const transactionVariants = (
    colors: ThemeColors
): { [key in TransactionVariants]: TransactionVariant  } => ({
    primary: {
        container: {
            borderRadius: 12,
            backgroundColor: colors.secondary,
            alignItems: "center",
            height: 74,
            flexDirection: "row",
            justifyContent: "center"
        },
        text1: {
            color: colors.tertiary,
        },
        text2: {
            marginTop: spacing(4),
            color: colors.tertiary,
        },
        iconAndTexts: {
            flexDirection: "row",
            width: "97%",
        },
        iconView: {
            backgroundColor: colors.card,
            width: 50,
            height: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
        },
        texts: {
            marginLeft: spacing(2),
            flex: 1,
        },
        text3: {
            justifyContent: "center",
            flex: 1,
            alignItems: "flex-end",
        }
    },
    secondary: {
        container: {
            borderRadius: 12,
            backgroundColor: colors.card,
            alignItems: "center",
            height: 74,
            flexDirection: "row",
            justifyContent: "center"
        },
        text1: {
            color: colors.secondary,
        },
        text2:{
            marginTop: spacing(4),
            color: colors.secondary,
        },
        iconAndTexts: {
            flexDirection: "row",
            width: "97%",
        },
        iconView: {
            backgroundColor: colors.secondary,
            width: 50,
            height: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50
        },
        texts: {
            marginLeft: spacing(2),
            flex: 1,
        },
        text3: {
            justifyContent: "center",
            alignItems: "flex-end",
            flex: 1,
        },
    }
});

