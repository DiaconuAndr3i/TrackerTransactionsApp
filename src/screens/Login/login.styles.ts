import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import { spacing } from "../../utils/theme/spacing";

const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    authContainer: {
      width: "86%",
      marginLeft: "7%",
      flex: 1,
      marginTop: spacing(6),
    },
    postContainer: {
      backgroundColor: colors.logInRegister,
      opacity: 0.3,
      position: "absolute",
      height: 500,
      width: 700,
      left: -100,
      top: -150,
      transform: [{rotateY: '-25deg'}],
    },
    trackerTransactionsContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    trackerTransactions: {
      fontSize: 30,
      fontWeight: "600",
      color: colors.primary
    },
    errorMessage: {
      marginTop: spacing(3),
      color: colors.expense,
      fontWeight: "500",
      fontSize: 14
    },
    signInLabel: {
      marginBottom: spacing(5),
    },
    signInButton: {
      marginVertical: spacing(5),
    },
    passwordInput: {
      marginTop: spacing(3),
      color: colors.tertiary,
    },
    orContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: spacing(5),
    },
    orContainerLine: {
      height: 1,
      backgroundColor: colors.primary,
      flex: 0.48,
    },
    logoOuterContainer: {
      width: "100%",
      alignItems: "center",
    },
    logoContainer: {
      flexDirection: "row",
      width: 150,
      justifyContent: "space-between",
    },
    newAccount: {
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: spacing(4),
    },
    createNewAccount: {
      color: colors.primary,
      marginLeft: spacing(1),
    },
    input: {
      color: colors.tertiary
    }
  });

export default styles;
