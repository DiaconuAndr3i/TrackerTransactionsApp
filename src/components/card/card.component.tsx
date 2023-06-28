import { View } from "react-native";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import cardStyles from "./card.styles";
import { Text } from "../text/index";
import { Icon } from "../icon";
import { IconButton } from "../iconButton";
import { useEffect } from "react";
import { onChildAdded, onValue, ref } from "firebase/database";
import { auth, db } from "../../utils/firebase";
import { useState } from "react";

export const Card = () => {
  const {
    theme: { colors },
  } = useThemeConsumer();

  const styles = cardStyles(colors);

  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);

  useEffect(() => {
    const currentUserId = auth.currentUser?.uid;
    const starCountRef = ref(db, "/" + currentUserId + "/card");
    onValue(starCountRef, (snapshot) => {
      console.log("Log from card OnValue ");
      console.log(snapshot.val());
      const data = snapshot.val();
      setTotalBalance(data === null ? 0 : data.totalBalance);
      setIncome(data === null ? 0 : data.income);
      setExpenses(data === null ? 0 : data.expenses);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardFirstHalf}>
          <View style={styles.totalBalanceAndAmount}>
            <Text sx={styles.totalBalance} variant="title5">
              Total Balance
              <Icon
                variant="chevron-small-up"
                size={24}
                color={colors.secondary}
              />
            </Text>
            <Text sx={styles.amount} variant="title1">
              $ {Number(totalBalance).toFixed(2)}
            </Text>
          </View>
          <IconButton
            sx={styles.iconThreeDots}
            title="convertor"
            variant="dots-horizontal"
            size={30}
            color={colors.secondary}
          />
        </View>
        <View style={styles.cardSecondHalf}>
          <View style={styles.income}>
            <View style={styles.containerIncome}>
              <View style={styles.arrowdown}>
                <Icon variant="arrowdown" color={colors.secondary} size={24} />
              </View>
              <Text sx={styles.incomeText} variant="title5">
                Income
              </Text>
            </View>
            <Text sx={styles.containerIncomeAmount} variant="title6">
              $ {Number(income).toFixed(2)}
            </Text>
          </View>
          <View style={styles.expense}>
            <View style={styles.containerExpense}>
              <View style={styles.arrowup}>
                <Icon variant="arrowup" color={colors.secondary} size={24} />
              </View>
              <Text sx={styles.expenseText} variant="title5">
                Expenses
              </Text>
            </View>
            <Text sx={styles.containerExpenseAmount} variant="title6">
              $ {Number(expenses).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
