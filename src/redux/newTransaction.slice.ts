import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ICategory } from "../utils/types/ICategory";
import { IAmountIncExp } from "../utils/types/IAmountIncExp";


type NewTransactionType = {
    category: ICategory;
    date: Date;
    amount: IAmountIncExp;
}

const initialState: NewTransactionType = {
    category: {
        type: "",
        variantIcon: "wallet"
    },
    date: new Date(),
    amount: {
        amount: 0,
        expInc: "income",
    }
}

export const newTransactionSlice = createSlice({
    name: "newTransaction",
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<ICategory>)=>{
            state.category.type = action.payload.type;
            state.category.variantIcon = action.payload.variantIcon;
        },
        setDate: (state, action: PayloadAction<Date>)=>{
            state.date = action.payload
        },
        setAmount: (state, action: PayloadAction<IAmountIncExp>)=>{
            state.amount.amount = action.payload.amount;
            state.amount.expInc = action.payload.expInc;
        },
    }
})


export const {setCategory, setDate, setAmount} = newTransactionSlice.actions;

export const selectCategoryValues = (state:RootState) => state.newTransactionReducer.category;
export const selectDateValue = (state:RootState) => state.newTransactionReducer.date;
export const selectAmount = (state:RootState) => state.newTransactionReducer.amount;

export default newTransactionSlice.reducer;