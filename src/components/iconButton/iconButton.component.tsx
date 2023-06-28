import {
  Pressable,
  ViewStyle,
  ButtonProps as NativeButtonProps,
} from "react-native";
import React from "react";
import { Icon, IconsVariant } from "../icon/icon.component";

interface ButtonProps extends NativeButtonProps {
  sx?: ViewStyle;
  variant?: IconsVariant;
  size?: number;
  color?: string;
}

export const IconButton = ({
  variant = "home",
  sx,
  size,
  color,
  ...props
}: ButtonProps) => {
  return (
    <Pressable style={[sx]} {...props}>
      <Icon variant={variant} size={size} color={color} />
    </Pressable>
  );
};
