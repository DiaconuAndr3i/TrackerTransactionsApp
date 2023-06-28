import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { RootStackParamList } from "../../navigation/navigator.types";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import registerStyles from "./register.styles";
import { Text } from "../../components/text/text.component";
import { TextInput } from "../../components/text-input";
import { Button } from "../../components/button";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RegisterProps = NativeStackScreenProps<RootStackParamList, "Register">;

const Register = ({ navigation }: RegisterProps) => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  console.log(registerForm);

  const {
    theme: { colors },
  } = useThemeConsumer();

  const saveUsername = async () => {
    await AsyncStorage.setItem(registerForm.email, registerForm.username);
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerForm.email,
        registerForm.password
      );
      await saveUsername();
    } catch (e) {
      setError((e as { message: string }).message);
    }
  };

  const styles = registerStyles(colors);

  const clearError = () => {
    setError("");
  };

  return (
    <SafeAreaView style={styles.authContainer}>
      <View style={styles.postContainer}></View>
      <Text sx={styles.signUpLabel} variant="title1">
        Sign up
      </Text>
      <TextInput
        textStyle={styles.input}
        value={registerForm.username}
        label="Username"
        onBlur={clearError}
        onChangeText={(username) =>
          setRegisterForm({
            ...registerForm,
            username: username,
          })
        }
      />
      <TextInput
        textStyle={styles.input}
        value={registerForm.email}
        label="Email"
        onBlur={clearError}
        onChangeText={(email) =>
          setRegisterForm({
            ...registerForm,
            email: email,
          })
        }
      />
      <TextInput
        value={registerForm.password}
        textStyle={styles.passwordInput}
        label="Password"
        secureTextEntry
        onBlur={clearError}
        onChangeText={(password) =>
          setRegisterForm({
            ...registerForm,
            password: password,
          })
        }
      />
      {error && <Text sx={styles.errorMessage}>{error}</Text>}
      <Button
        sx={styles.signUpButton}
        onPress={() => signUp()}
        title="Sign up"
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
        <Text>Do you already have an account?</Text>
        <Text
          onPress={() => navigation.navigate("Login")}
          sx={styles.createNewAccount}
        >
          Sign in
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
