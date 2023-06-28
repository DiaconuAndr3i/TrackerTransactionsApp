import React, { useState, useEffect, useCallback } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Pressable,
  RefreshControl,
} from "react-native";
import { Header } from "../../components/header";
import { Card } from "../../components/card";
import { Button } from "../../components/button";
import { Text } from "../../components/text";
import homeStyles from "./home.styles";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import { Transaction } from "../../modules/transaction";
import { spacing } from "../../utils/theme/spacing";
import { ITransaction } from "../../utils/types/ITransaction";
import { ref, onChildAdded, DataSnapshot, set } from "firebase/database";
import { auth, db } from "../../utils/firebase";

const Home = () => {
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
    const currentUserId = auth.currentUser?.uid;
    const transactionsRef = ref(db, "/" + currentUserId + "/transactions");
    const transactionArray: ITransaction[] = [];
    onChildAdded(transactionsRef, (data) => {
      transactionArray.push(mapToResponse(data));
      setTransactions(transactionArray);
      console.log(
        "Length of transactions array from home component:" +
          transactionArray.length
      );
    });
  }, []);

  const styles = homeStyles(colors);

  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  /*const getTransactions = async () => {
    const collectionRef = collection(firestore, "transactions");
    const collectionOfTransactions = await getDocs(collectionRef);
    let transactionArray: ITransaction[] = [];
    collectionOfTransactions.forEach((transaction) => {
      const transactionData = transaction.data();
      transactionArray.push({
        id: transactionData.id,
        amount: transactionData.amount,
        date: transactionData.date.seconds,
        expInc: transactionData.expInc,
        type: transactionData.type,
        variant: transactionData.variant,
        variantIcon: transactionData.variantIcon,
      });
    });

    setTransactions(transactionArray);
  };

   useEffect(() => {
    getTransactions();
  }, []); */

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Card />
      <View style={styles.containerHeaderTransaction}>
        <Text variant="title4" sx={styles.transactionsHistory}>
          Transactions History
        </Text>
        <Button sx={styles.buttonFilter} title="Filter" variant="filter" />
      </View>
      <View style={styles.transactions}></View>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={transactions}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ padding: spacing(1) }} />}
        renderItem={({ item }) => (
          <Transaction
            title={item.id}
            variant={item.variant}
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
    </SafeAreaView>
  );
};

export default Home;
