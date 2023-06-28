import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import { spacing } from "../../utils/theme/spacing";

const styles = (colors: ThemeColors) => 
    StyleSheet.create({
        container: {
            flexDirection: "row",
            marginLeft: spacing(4),
            marginRight: spacing(4),
            alignItems: "flex-end",
        },
        textStylesForInput: {
            marginTop: spacing(3),
            color: colors.statisticsMenu,
        },
        containerStyle: {
            flex: 1,

        },
        currency: {
            color: colors.primary,
            marginBottom: spacing(3),
            marginRight: spacing(1),
        }
    })


export default styles;