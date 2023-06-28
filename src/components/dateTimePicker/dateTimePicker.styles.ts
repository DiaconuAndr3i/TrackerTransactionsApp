import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import { spacing } from "../../utils/theme/spacing";

const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    textInput: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
    },
    textStylesForInput: {
        color: colors.statisticsMenu,
    },
    containerStylesForInput: {
        width: "90%"
    },
  })


export default styles;