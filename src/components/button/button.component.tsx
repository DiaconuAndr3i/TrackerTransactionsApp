import {
  Pressable,
  ViewStyle,
  ButtonProps as NativeButtonProps,
} from "react-native";
import React from "react";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import { Text } from "../text";
import { buttonVariants } from "./button.variants";
import { View } from "react-native";

export type ButtonVariants = "logInRegister" | "deleteTransaction" | "filter";
interface ButtonProps extends NativeButtonProps {
  sx?: ViewStyle;
  variant?: ButtonVariants;
}

export const Button = ({
  variant = "logInRegister",
  sx,
  ...props
}: ButtonProps) => {
  const {
    theme: { colors },
  } = useThemeConsumer();

  const buttonStyles = buttonVariants(colors)[variant];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Pressable style={[buttonStyles.container, sx]} {...props}>
        <Text sx={buttonStyles.text} variant="title2">
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};
