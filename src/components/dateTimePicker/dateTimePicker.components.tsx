import { View, Pressable, Platform } from "react-native";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import { Text } from "../text/index";
import dateTimePickerStyles from "./dateTimePicker.styles";
import { TextInput } from "../text-input";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDate as setReduxDate } from "../../redux/newTransaction.slice";

export const DateTimePickerCustom = () => {
  const {
    theme: { colors },
  } = useThemeConsumer();

  const styles = dateTimePickerStyles(colors);

  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formatDate = (date: Date | undefined) => {
    if (date != undefined)
      return `${date.getDate()}-${
        months[date.getMonth()]
      }-${date.getFullYear()}`;
  };

  const dispatch = useDispatch();

  return (
    <View style={styles.textInput}>
      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={({ type }, selectedDate) => {
            if (type == "set") {
              toggleDatePicker();
              if (selectedDate != undefined) {
                setDate(selectedDate);
                dispatch(setReduxDate(selectedDate));
              }
            }
          }}
        />
      )}
      <View style={styles.containerStylesForInput}>
        <Pressable onPress={toggleDatePicker}>
          <TextInput
            textStyle={styles.textStylesForInput}
            value={formatDate(date)}
            label="Choose date"
            onChangeText={() => {}}
            editable={false}
          />
        </Pressable>
      </View>
    </View>
  );
};
