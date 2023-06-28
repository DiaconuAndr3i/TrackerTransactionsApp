import { View, Switch } from "react-native";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import { Text } from "../text/index";
import valueTransactionStyles from "./value.transaction.styles";
import { TextInput } from "../text-input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAmount } from "../../redux/newTransaction.slice";

export const ValueTransaction = () => {
  const {
    theme: { colors },
  } = useThemeConsumer();

  const styles = valueTransactionStyles(colors);

  const [amountForm, setAmountForm] = useState({
    stateSwitch: true,
    amount: 0,
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text sx={styles.currency} variant="title1">
        $
      </Text>
      <TextInput
        textStyle={styles.textStylesForInput}
        containerStyle={styles.containerStyle}
        label={"Amount " + (amountForm.stateSwitch ? "income" : "expense")}
        onChangeText={(item) => {
          setAmountForm({
            ...amountForm,
            amount: Number(item),
          });
          dispatch(
            setAmount({
              amount: Number(item),
              expInc: amountForm.stateSwitch ? "income" : "expense",
            })
          );
        }}
      />
      <Switch
        trackColor={{ false: colors.expense, true: colors.income }}
        thumbColor={colors.secondary}
        onValueChange={(e) => {
          setAmountForm({
            ...amountForm,
            stateSwitch: e,
          });
          dispatch(
            setAmount({
              amount: amountForm.amount,
              expInc: e ? "income" : "expense",
            })
          );
        }}
        value={amountForm.stateSwitch}
      />
    </View>
  );
};
