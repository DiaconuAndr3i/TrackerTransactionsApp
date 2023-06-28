import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import dropdownStyles from "./dropdown.styles";
import { Icon } from "../icon";
import { IconsVariant } from "../icon/icon.component";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/newTransaction.slice";

const data = [
  { label: "Rent", value: "1" },
  { label: "Streaming", value: "2" },
  { label: "Transactions card", value: "3" },
  { label: "Food", value: "4" },
  { label: "Drink", value: "5" },
  { label: "Entertainment", value: "6" },
  { label: "Travel", value: "7" },
  { label: "Others", value: "8" },
];

export const DropdownComponent = () => {
  const {
    theme: { colors },
  } = useThemeConsumer();

  const styles = dropdownStyles(colors);

  const [value, setValue] = useState("");
  const [iconVarinat, setIconVariant] = useState<IconsVariant>("wallet");

  const dispatch = useDispatch();

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        switch (item.label) {
          case "Rent":
            setIconVariant("home");
            dispatch(setCategory({ type: "Rent", variantIcon: "home" }));
            break;
          case "Streaming":
            setIconVariant("logo-youtube");
            dispatch(
              setCategory({ type: "Streaming", variantIcon: "logo-youtube" })
            );
            break;
          case "Transactions card":
            setIconVariant("money");
            dispatch(
              setCategory({ type: "Transactions card", variantIcon: "money" })
            );
            break;
          case "Food":
            setIconVariant("fast-food");
            dispatch(setCategory({ type: "Food", variantIcon: "fast-food" }));
            break;
          case "Drink":
            setIconVariant("drink");
            dispatch(setCategory({ type: "Drink", variantIcon: "drink" }));
            break;
          case "Entertainment":
            setIconVariant("emoji-events");
            dispatch(
              setCategory({
                type: "Entertainment",
                variantIcon: "emoji-events",
              })
            );
            break;
          case "Travel":
            setIconVariant("airline-seat-recline-extra");
            dispatch(
              setCategory({
                type: "Travel",
                variantIcon: "airline-seat-recline-extra",
              })
            );
            break;
          case "Others":
            setIconVariant("wallet");
            dispatch(setCategory({ type: "Others", variantIcon: "wallet" }));
        }
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        <Icon variant={iconVarinat} color={colors.card} sx={styles.icon} />
      )}
    />
  );
};

export default DropdownComponent;
