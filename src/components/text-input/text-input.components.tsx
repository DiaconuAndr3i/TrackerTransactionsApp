import React, { useState } from "react";
import { Text } from "../text";
import {
  TextInput as NativeTextInput,
  TextStyle,
  TextInputProps as NativeTextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { spacing } from "../../utils/theme/spacing";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import { ThemeColors } from "../../utils/theme/colors";
import { View } from "react-native";
import textInputStyles from "./text-input.styles";

interface TextInputProps extends NativeTextInputProps {
  textStyle?: TextStyle;
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  onChangeText: (e: string) => void;
}

export const TextInput = ({
  textStyle,
  label,
  onChangeText,
  containerStyle,
  ...props
}: TextInputProps) => {
  const [value, setValue] = useState("");
  const {
    theme: { colors },
  } = useThemeConsumer();

  const styles = textInputStyles(colors);
  return (
    <View style={containerStyle}>
      <Text variant="title6" sx={textStyle}>
        {label}
      </Text>
      <NativeTextInput
        style={styles.container}
        onChangeText={(e) => {
          onChangeText(e);
          setValue(e);
        }}
        value={value}
        {...props}
      />
    </View>
  );
};
