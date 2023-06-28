import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import {spacing} from "../../utils/theme/spacing";

const styles = (colors: ThemeColors) => 
    
    StyleSheet.create({
        containerHeaderTransaction: {
            flexDirection: "row",
        },
        transactionsHistory: {
            color: colors.tertiary,
            flex: 1,
            marginLeft: spacing(4),
            marginTop: spacing(4),
        },
        buttonFilter: {
            marginRight: spacing(4),
            marginTop: spacing(4),
        },
        transactions: {
            marginTop: spacing(3)
        },
        flatList: {
            alignItems: "center",
        }
    });

export default styles;