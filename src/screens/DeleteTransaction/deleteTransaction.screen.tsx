import React, { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, View } from "react-native";
import { Header } from "../../components/header";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import { Text } from "../../components/text";
import { Button } from "../../components/button";
import { useSelector } from "react-redux";
import deleteTransactionStyles from "./deleteTransaction.styles";
import { Transaction } from "../../modules/transaction";
import { spacing } from "../../utils/theme/spacing";
import { ITransaction } from "../../utils/types/ITransaction";
import { ref, onChildAdded, DataSnapshot } from "firebase/database";
import { db } from "../../utils/firebase";
import { TransactionVariants } from "../../modules/transaction/transaction.component";

const DeleteTransaction = () => {
  const {
    theme: { colors },
  } = useThemeConsumer();

  const mapToResponse = (obj: DataSnapshot) => {
    return {
      id: obj.key!,
      amount: obj.val().amount,
      date: obj.val().date,
      expInc: obj.val().expInc,
      type: obj.val().type,
      variant: obj.val().variant,
      variantIcon: obj.val().variantIcon,
    };
  };

  useEffect(() => {
    console.log("Realtime din firebase");
    const transactionsRef = ref(db, "transactions/");
    const transactionArray: ITransaction[] = [];
    onChildAdded(transactionsRef, (data) => {
      transactionArray.push(mapToResponse(data));
      setTransactions(transactionArray);
      console.log(transactionArray.length);
    });
  }, []);

  const styles = deleteTransactionStyles(colors);

  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const [variantSwitch, setVariantSwitch] =
    useState<TransactionVariants>("primary");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <View style={styles.transactions}></View>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={transactions}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ padding: spacing(1) }} />
          )}
          renderItem={({ item }) => (
            <Transaction
              onPress={() => {
                console.log(item.variant);
                setVariantSwitch(
                  item.variant === "primary" ? "secondary" : "primary"
                );
              }}
              title={item.id}
              variant={variantSwitch}
              text1={item.type}
              text2={new Date(item.date).toDateString()}
              text3={
                item.expInc === "expense"
                  ? "- $ " + item.amount.toString()
                  : "+ $ " + item.amount.toString()
              }
              expInc={item.expInc}
              variantIcon={item.variantIcon}
              sx={{}}
            />
          )}
        />
        <View style={{ marginBottom: spacing(3) }}></View>
      </View>
      <View style={styles.buttonRemove}>
        <Button title="Remove" />
      </View>
    </SafeAreaView>
  );
};

export default DeleteTransaction;
