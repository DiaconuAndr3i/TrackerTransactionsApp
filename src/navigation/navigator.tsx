import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useThemeConsumer } from "../utils/theme/theme.consumer";
import { Dashboard } from "./dashboard";
import { useAuthentication } from "../hooks/useAuthentication";
import { Authentication } from "./authentification";

export const Navigator = () => {
  const { theme } = useThemeConsumer();
  const { user } = useAuthentication();

  return (
    <NavigationContainer>
      {user ? <Dashboard /> : <Authentication />}
    </NavigationContainer>
  );
};
