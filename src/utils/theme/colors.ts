type ColorsKeys = 
    | "primary"
    | "secondary"
    | "tertiary"
    | "card"
    | "logInRegister"
    | "navigationButtonsPrimaryAndFieldsStroke"
    | "navigationButtonsSecondary"
    | "income"
    | "expense"
    | "statisticsMenu"
    | "navigationAndDownloadStatistics";


export type ThemeColors = { [key in ColorsKeys]: string };

export const colors: ThemeColors = {
    primary: "#429690",
    secondary: "#FFFFFF",
    tertiary: "#000000",
    card: "#2F7E79",
    logInRegister: "#69AEA9",
    navigationButtonsPrimaryAndFieldsStroke: "#438883",
    navigationButtonsSecondary: "#AAAAAA",
    income: "#25A969",
    expense: "#F95B51",
    statisticsMenu: "#666666",
    navigationAndDownloadStatistics: "#424242"
};