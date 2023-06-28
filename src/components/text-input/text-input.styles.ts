import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import { spacing } from "../../utils/theme/spacing";

const styles = (colors: ThemeColors) => 
    StyleSheet.create({
        container: {
      borderWidth: 1,
      borderRadius: 10,
      paddingVertical: 10,
      fontSize: 18,
      fontWeight: "400",
      color: colors.statisticsMenu,
      paddingHorizontal: 20,
      borderColor: colors.primary,
      marginTop: spacing(2),
    },
    })


export default styles;