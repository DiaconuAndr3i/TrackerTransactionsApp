import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";
import { spacing } from "../../utils/theme/spacing";

const styles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: "150%",
        height: 210,
        borderBottomRightRadius: 200,
        borderBottomLeftRadius: 200,
        position: "absolute",
        left: "-25%",
    },
    containerCircle: {
       position: "absolute",
      },
      positionContainerCircle0: {
        left: 40,
        bottom: 50
      },
      positionContainerCircle1: {
        left: 160,
        bottom: 90
      },
      positionContainerCircle2: {
        left: 280,
        bottom: 130
      },
      circle: {
        borderRadius: 100,
        borderWidth: 20,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      marginCircle0: {
        width: 200,
        height: 200,
      },
      marginCircle1: {
        width: 160,
        height: 160,
      },
      marginCircle2: {
        width: 120,
         height: 120,
      },
      innerCircle: {
        borderRadius: 90,
        backgroundColor: colors.primary,
      },
      marginInnerCircle0: {
        width: 170,
        height: 170,
      },
      marginInnerCircle1: {
        width: 140,
        height: 140,
      },
      marginInnerCircle2: {
        width: 110,
        height: 110,
      },
      containerGreeting: {
        position: "absolute",
        left: 120,
        top: 60,
      },
      greeting: {
        color: colors.secondary,
      },
      name: {
        color: colors.secondary,
      },
      logoutButton: {
        marginLeft: 300,
        marginTop: 67
      }
  });

export default styles;
