import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import { spacing } from "../../utils/theme/spacing";

const styles = (colors: ThemeColors) => 
    StyleSheet.create({
        dropdown: {
            margin: 16,
            height: 50,
            borderBottomColor: colors.primary,
            borderBottomWidth: 0.5,
          },
          icon: {
            marginRight: 15,
          },
          placeholderStyle: {
            fontSize: 16,
          },
          selectedTextStyle: {
            fontSize: 18,
            fontWeight: "400",
            color: colors.statisticsMenu
          },
          inputSearchStyle: {
            height: 40,
            fontSize: 16,
            color: colors.statisticsMenu
          },
    })

export default styles;