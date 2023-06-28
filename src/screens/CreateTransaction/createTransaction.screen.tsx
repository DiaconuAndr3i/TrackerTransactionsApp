import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, View } from "react-native";
import { Header } from "../../components/header";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import createTransactionStyles from "./createTransaction.styles";
import { DropdownComponent } from "../../components/dropdown";
import { Text } from "../../components/text";
import { DateTimePickerCustom } from "../../components/dateTimePicker";
import { ValueTransaction } from "../../components/valueTransaction";
import { Button } from "../../components/button";
import { useSelector } from "react-redux";
import {
  selectCategoryValues,
  selectDateValue,
  selectAmount,
} from "../../redux/newTransaction.slice";
import {
  getDatabase,
  onValue,
  push,
  ref,
  set,
  update,
} from "firebase/database";
import { useGetQuoteQuery } from "../../redux/quotes.service";
import { auth, db } from "../../utils/firebase";
import { scheduleNotificationAsync } from "expo-notifications";

const CreateTransaction = () => {
  const {
    theme: { colors },
  } = useThemeConsumer();

  const currentUserId = auth.currentUser?.uid;

  const createTransactionRealtimeDB = async () => {
    const db = getDatabase();
    const transactionsListRef = ref(db, "/" + currentUserId + "/transactions");
    const newTransactionRef = push(transactionsListRef);
    set(newTransactionRef, {
      id: "probabil ca trebuie sa elimin asta",
      amount: amountValues.amount,
      date: dateValue.getTime(),
      expInc: amountValues.expInc,
      type: categoryValues.type,
      variant: "primary",
      variantIcon: categoryValues.variantIcon,
    });
    await updateCard(amountValues.expInc, amountValues.amount);
    console.log(
      "Log from createTransaction after running updateTransaction to see totalBalance, income, expense:"
    );
    console.log("TOTALBALANCE: " + totalBalance);
    console.log("INCOME: " + income);
    console.log("EXPENSES: " + expenses);
    update(ref(db, "/" + currentUserId + "/card"), {
      income: income,
      expenses: expenses,
      totalBalance: totalBalance,
    });
  };

  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);

  useEffect(() => {
    const starCountRef = ref(db, "/" + currentUserId + "/card");
    onValue(starCountRef, (snapshot) => {
      console.log("Log from createTransaction OnValue ");
      console.log(snapshot.val());
      const data = snapshot.val();
      setTotalBalance(data === null ? 0 : data.totalBalance);
      setIncome(data === null ? 0 : data.income);
      setExpenses(data === null ? 0 : data.expenses);
    });
  }, []);

  const updateCard = async (expInc: string, amount: number) => {
    if (expInc === "income") {
      setTotalBalance(totalBalance + amount);
      setIncome(income + amount);
    } else {
      setTotalBalance(totalBalance - amount);
      setExpenses(expenses + amount);
    }
  };

  const styles = createTransactionStyles(colors);

  const categoryValues = useSelector(selectCategoryValues);
  const dateValue = useSelector(selectDateValue);
  const amountValues = useSelector(selectAmount);

  /* const addTransaction = async () => {
    const collectionRef = collection(firestore, "transactions");
    await addDoc(collectionRef, {
      id: "altcevaa",
      amount: amountValues.amount,
      date: dateValue,
      expInc: amountValues.expInc,
      type: categoryValues.type,
      variant: "primary",
      variantIcon: categoryValues.variantIcon,
    });
  }; */

  const { refetch, data, isLoading } = useGetQuoteQuery(undefined);

  const sendNotification = async () => {
    console.log(amountValues.expInc);
    scheduleNotificationAsync({
      content: {
        title: "Transaction processed successfully",
        body: `Amount ${
          amountValues.expInc === "income" ? "inserted " : "withdrawn"
        } $${amountValues.amount}`,
      },
      trigger: {
        seconds: 2,
      },
    });
  };

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <View style={styles.postContainer}>
          <Text variant="title6" sx={styles.chooseACategory}>
            Choose a category
          </Text>
          <DropdownComponent />
          <DateTimePickerCustom />
          <ValueTransaction />
          {/* <Text>Type: {categoryValues.type}</Text>
          <Text>VariantIcon: {categoryValues.variantIcon}</Text>
          <Text>
            Date: {dateValue.getDate()}-{dateValue.getMonth() + 1}-
            {dateValue.getFullYear()}
          </Text>
          <Text>Amount: {amountValues.amount}</Text>
          <Text>ExpInc: {amountValues.expInc}</Text> */}
          <Button
            disabled={amountValues.amount === 0 || !categoryValues.type}
            sx={{ marginTop: 110 }}
            title="Add"
            onPress={() => {
              createTransactionRealtimeDB();
              refetch();
              sendNotification();
              Alert.alert(
                "Transaction added",
                `${data != undefined ? data[0].q : ""}\n\n${
                  data != undefined ? "-" + data[0].a + "-" : ""
                }`,
                [{ text: "OK", onPress: () => {} }]
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateTransaction;
