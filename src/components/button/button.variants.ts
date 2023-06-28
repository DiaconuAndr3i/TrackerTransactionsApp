import { TextStyle, ViewStyle } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import { ButtonVariants } from "./button.component";

type ButtonVariant = {
  container?: ViewStyle;
  text?: TextStyle;
};

export const buttonVariants = (
  colors: ThemeColors
): { [key in ButtonVariants]: ButtonVariant } => ({
    logInRegister: {
    container: {
      borderRadius: 20,
      backgroundColor: colors.logInRegister,
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      width: "95%",
    },
    text: {
      color: colors.secondary,
    },
  },
  deleteTransaction: {
    container: {
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      borderWidth: 2,
      borderColor: colors.logInRegister,
      width: "95%",
    },
    text: {
      color: colors.logInRegister,
    },
  },
  filter: {
    text: {
      color: colors.statisticsMenu,
    },
  },
});
