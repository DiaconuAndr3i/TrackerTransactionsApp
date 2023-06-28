import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";

export const useAuthentication = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (_user) => {
      if (_user) setUser(_user);
      else setUser(undefined);
    });
    return unsubscribe;
  }, []);

  return {
    user,
  };
};
