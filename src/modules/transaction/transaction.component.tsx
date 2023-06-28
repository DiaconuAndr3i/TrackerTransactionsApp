import {
  Pressable,
  ViewStyle,
  ButtonProps as NativeButtonProps,
} from "react-native";
import React from "react";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import { transactionVariants } from "./transaction.variants";
import { Text } from "../../components/text";
import { Icon } from "../../components/icon";
import { View } from "react-native";
import { IconsVariant } from "../../components/icon/icon.component";

export type TransactionVariants = "primary" | "secondary";

interface TransactionProps extends NativeButtonProps {
  sx?: ViewStyle;
  variant?: TransactionVariants;
  text1?: string;
  text2?: string;
  text3?: string;
  expInc?: string;
  variantIcon?: IconsVariant;
}

export const Transaction = ({
  variant = "secondary",
  sx,
  text1,
  text2,
  text3,
  expInc,
  variantIcon,
  ...props
}: TransactionProps) => {
  const {
    theme: { colors },
  } = useThemeConsumer();

  const transactionVariant = transactionVariants(colors)[variant];
  return (
    <Pressable style={[transactionVariant.container, sx]} {...props}>
      <View style={transactionVariant.iconAndTexts}>
        <View style={transactionVariant.iconView}>
          <Icon variant={variantIcon} />
        </View>
        <View style={transactionVariant.texts}>
          <Text sx={transactionVariant.text1} variant="title2">
            {text1}
          </Text>
          <Text sx={transactionVariant.text2} variant="title3">
            {text2}
          </Text>
        </View>
        <View style={transactionVariant.text3}>
          <Text
            sx={
              variant === "primary"
                ? expInc === "expense"
                  ? {
                      color: colors.expense,
                    }
                  : {
                      color: colors.income,
                    }
                : {
                    color: colors.secondary,
                  }
            }
            variant="title4"
          >
            {text3}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
