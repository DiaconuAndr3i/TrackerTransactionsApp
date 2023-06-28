import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import { spacing } from "../../utils/theme/spacing";

const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection:"row",
      justifyContent: "center",
      alignItems: "flex-end",
      height: 192,
    },
    card: {
      width: "90%",
      height: 160,
      backgroundColor: colors.card,
      borderRadius: 30,
    },
    totalBalance: {
      color: colors.secondary,
      marginTop: spacing(3),
      marginLeft: spacing(4),
    },
    totalBalanceAndAmount: {
      flex: 1,
    },
    iconThreeDots: {
      flex: 1,
      alignItems: "flex-end",
      marginRight: spacing(4),
      marginTop: spacing(3),
    },
    amount: {
      color: colors.secondary,
      marginLeft: spacing(4),
      marginTop: spacing(2)
    },
    cardFirstHalf: {
      flex: 1,
      flexDirection: "row"
    },
    cardSecondHalf: {
      flex: 1,
      flexDirection: "row"
    },
    income: {
      flex: 1,
    },
    expense: {
      flex: 1,
    },
    arrowdown: {
      width: 27,
      height: 27,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 50,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginEnd: spacing(1),
    },
    arrowup: {
      width: 27,
      height: 27,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 50,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    containerIncome: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginLeft: spacing(4),
      flex: 1,
    },
    containerExpense: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginRight: spacing(4),
      flex: 1,
    },
    containerIncomeAmount: {
        flex: 1,
        marginLeft: spacing(4),
        color: colors.secondary
    },
    containerExpenseAmount: {
        flex: 1,
        marginRight: spacing(4),
        color: colors.secondary,
        textAlign: "right",
    },
    incomeText: {
      color: colors.secondary,
    },
    expenseText: {
      color: colors.secondary,
      marginLeft: spacing(1)
    },
  });

export default styles;
