import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import { spacing } from "../../utils/theme/spacing";

const styles = (colors: ThemeColors) => 
    StyleSheet.create({
        container: {
            width: "100%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 33,
        },
        postContainer: {
            backgroundColor: colors.secondary,
            width: "90%",
            height: "65%",
            borderRadius: 30,
        },
        chooseACategory: {
            color: colors.statisticsMenu,
            marginLeft: spacing(4),
            marginTop: spacing(4)
        },
});



export default styles;