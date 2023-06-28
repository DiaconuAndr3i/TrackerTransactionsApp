import {
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  FontAwesome,
  Entypo,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { ViewStyle } from "react-native/types";

export type IconsVariant =
  | "home"
  | "home-outline"
  | "card"
  | "card-outline"
  | "logo-youtube"
  | "coffee"
  | "fast-food"
  | "food-fork-drink"
  | "money"
  | "timer"
  | "timer-outline"
  | "plus-square"
  | "plus-square-o"
  | "minus-square"
  | "minus-square-o"
  | "bar-chart"
  | "bar-chart-outline"
  | "chevron-small-up"
  | "dots-horizontal"
  | "arrowup"
  | "arrowdown"
  | "drink"
  | "emoji-events"
  | "airline-seat-recline-extra"
  | "wallet"
  | "logout";

interface IconProps {
  sx?: ViewStyle;
  variant?: IconsVariant;
  size?: number;
  color?: string;
}

export const Icon = ({
  sx,
  variant = "home",
  size = 35,
  color = "#000000",
}: IconProps) => {
  let icon;
  switch (variant) {
    case "home":
    case "home-outline":
    case "card":
    case "card-outline":
    case "logo-youtube":
    case "fast-food":
    case "timer":
    case "timer-outline":
    case "bar-chart":
    case "bar-chart-outline":
      icon = <Ionicons name={variant} size={size} color={color} style={[sx]} />;
      break;
    case "coffee":
      icon = <Feather name={variant} size={size} color={color} style={[sx]} />;
      break;
    case "food-fork-drink":
    case "dots-horizontal":
    case "logout":
      icon = (
        <MaterialCommunityIcons
          name={variant}
          size={size}
          color={color}
          style={[sx]}
        />
      );
      break;
    case "money":
    case "plus-square":
    case "plus-square-o":
    case "minus-square":
    case "minus-square-o":
      icon = (
        <FontAwesome name={variant} size={size} color={color} style={[sx]} />
      );
      break;
    case "chevron-small-up":
    case "drink":
    case "wallet":
      icon = <Entypo name={variant} size={size} color={color} style={[sx]} />;
      break;
    case "arrowup":
    case "arrowdown":
      icon = (
        <AntDesign name={variant} size={size} color={color} style={[sx]} />
      );
      break;
    case "emoji-events":
    case "airline-seat-recline-extra":
      icon = (
        <MaterialIcons name={variant} size={size} color={color} style={[sx]} />
      );
      break;
  }
  return icon;
};
