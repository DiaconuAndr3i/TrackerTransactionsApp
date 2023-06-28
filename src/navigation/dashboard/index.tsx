import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Statistics from "../../screens/Statistics";
import CreateTransaction from "../../screens/CreateTransaction";
import DeleteTransaction from "../../screens/DeleteTransaction";
import { RootStackParamList } from "../navigator.types";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon } from "../../components/icon";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const Dashboard = () => {
  const {
    theme: {
      colors: { primary, secondary },
    },
  } = useThemeConsumer();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }) => {
          let iconName: any;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CreateTransaction") {
            iconName = focused ? "plus-square" : "plus-square-o";
          } else if (route.name === "DeleteTransaction") {
            iconName = focused ? "minus-square" : "minus-square-o";
          } else if (route.name === "Statistics") {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          }
          // You can return any component that you like here!
          return <Icon variant={iconName} size={30} color={primary} />;
        },
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: secondary,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CreateTransaction" component={CreateTransaction} />
      <Tab.Screen name="DeleteTransaction" component={DeleteTransaction} />
      <Tab.Screen name="Statistics" component={Statistics} />
    </Tab.Navigator>
  );
};
