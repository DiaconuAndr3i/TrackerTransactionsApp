import { Alert, View } from "react-native";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import headerStyles from "./header.styles";
import { Text } from "../text/index";
import { IconButton } from "../iconButton";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Button } from "../button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const Header = () => {
  const {
    theme: { colors },
  } = useThemeConsumer();

  const styles = headerStyles(colors);

  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const fetchDataFromAsynStorage = async () => {
      if (auth.currentUser?.email) {
        await AsyncStorage.getItem(auth.currentUser?.email, (error, u) => {
          if (error) {
            Alert.alert("Couldn't retrive the username");
          }
          if (u) {
            console.log("Getting username: " + u);
            setUsername(u);
          }
        });
      }
    };
    fetchDataFromAsynStorage().catch(console.error);
    /* AsyncStorage.clear();
    console.log("AsynStorage cleaned"); */
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.containerCircle, styles.positionContainerCircle0]}>
          <View style={[styles.circle, styles.marginCircle0]}>
            <View style={[styles.innerCircle, styles.marginInnerCircle0]} />
          </View>
        </View>
        <View style={[styles.containerCircle, styles.positionContainerCircle1]}>
          <View style={[styles.circle, styles.marginCircle1]}>
            <View style={[styles.innerCircle, styles.marginInnerCircle1]} />
          </View>
        </View>
        <View style={[styles.containerCircle, styles.positionContainerCircle2]}>
          <View style={[styles.circle, styles.marginCircle2]}>
            <View style={[styles.innerCircle, styles.marginInnerCircle2]} />
          </View>
        </View>
        <View style={styles.containerGreeting}>
          <Text variant="title5" sx={styles.greeting}>
            Good afternoon,
          </Text>
          <Text variant="title1" sx={styles.name}>
            {username}
          </Text>
        </View>
      </View>
      <View style={styles.logoutButton}>
        <IconButton
          title="logout"
          variant="logout"
          size={27}
          color={colors.secondary}
          onPress={() => {
            signOut(auth);
          }}
        />
      </View>
    </View>
  );
};
