import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import { spacing } from "../../utils/theme/spacing";

const styles = (colors: ThemeColors) => 
    StyleSheet.create({
        container: {
            marginTop: 250,
            height: 270,
        },
        transactions: {
            marginTop: spacing(3)
        },
        flatList: {
            alignItems: "center",
        },
        buttonRemove:{
            marginTop: 40
        }
});



export default styles;