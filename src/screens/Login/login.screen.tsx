import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { RootStackParamList } from "../../navigation/navigator.types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import loginStyles from "./login.styles";
import { Text } from "../../components/text/text.component";
import { TextInput } from "../../components/text-input";
import { Button } from "../../components/button";

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: LoginProps) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      );
    } catch (error) {
      setError((error as { message: string }).message);
    }
  };

  const {
    theme: { colors },
  } = useThemeConsumer();

  const styles = loginStyles(colors);

  return (
    <SafeAreaView style={styles.authContainer}>
      <View style={styles.postContainer}></View>
      <Text sx={styles.signInLabel} variant="title1">
        Sign in
      </Text>
      <TextInput
        textStyle={styles.input}
        label="Email"
        onChangeText={(e) =>
          setLoginForm({
            ...loginForm,
            email: e,
          })
        }
      />
      <TextInput
        textStyle={styles.passwordInput}
        secureTextEntry
        label="Password"
        onChangeText={(e) =>
          setLoginForm({
            ...loginForm,
            password: e,
          })
        }
      />
      {error && <Text sx={styles.errorMessage}>{error}</Text>}
      <Button
        sx={styles.signInButton}
        onPress={() => signIn()}
        title="Sign in"
      />
      <View style={styles.orContainer}>
        <View style={styles.orContainerLine} />
        <Text>OR</Text>
        <View style={styles.orContainerLine} />
      </View>
      <View style={styles.trackerTransactionsContainer}>
        <Text sx={styles.trackerTransactions}>Tracker</Text>
        <Text sx={styles.trackerTransactions}>Transactions</Text>
      </View>
      <View style={styles.newAccount}>
        <Text>Dont you have an account?</Text>
        <Text
          onPress={() => navigation.navigate("Register")}
          sx={styles.createNewAccount}
        >
          Create one
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
