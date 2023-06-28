import React from "react";
import { ThemeProvider } from "./src/utils/theme/theme.provider";
import { Navigator } from "./src/navigation/navigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </Provider>
  );
}
