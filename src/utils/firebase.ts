import  Constants  from "expo-constants";
import { initializeApp } from "firebase/app";
/* import {getAuth} from "firebase/auth"; */
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: Constants.manifest?.extra?.apiKey,
    authDomain: Constants.manifest?.extra?.authDomain,
    databaseURL: "https://incomeexpensetrackerapp-b1e13-default-rtdb.firebaseio.com/",
    projectId: Constants.manifest?.extra?.projectId,
    storageBucket: Constants.manifest?.extra?.storageBucket,
    messagingSenderId: Constants.manifest?.extra?.messagingSenderId,
    appId: Constants.manifest?.extra?.appId,
  };


  const app = initializeApp(firebaseConfig);

/* export const auth = getAuth(app); */
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
/* export const firestore = getFirestore(app); */

export const db = getDatabase(app);


export default app;