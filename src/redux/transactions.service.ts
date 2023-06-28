import { createSlice } from "@reduxjs/toolkit";
import { ITransaction } from "../utils/types/ITransaction";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { firestore } from "../utils/firebase";
import { RootState } from "./store";

type transactionsType = {
    transactions: ITransaction[],
}


export const initialState: transactionsType = {
    transactions: []
}

export const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        getTransactions: () =>{
             getLocalTransactions();
        }
    },
});



const getLocalTransactions = async () => {
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
    initialState.transactions = [...transactionArray]
    console.log("From slicer")
    console.log(initialState.transactions)
};

export const {getTransactions} = transactionsSlice.actions;

export const selectTransactionsList = (state:RootState) => state.transactionsReducer.transactions;

export default transactionsSlice.reducer;