import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import { initializeApp, getApps } from "firebase/app";

import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOzwald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyC2MjUpVWYITUoZWCz0N_c_IIxgH6VMOXs",
  authDomain: "mealstogo-d6748.firebaseapp.com",
  projectId: "mealstogo-d6748",
  storageBucket: "mealstogo-d6748.appspot.com",
  messagingSenderId: "911497589902",
  appId: "1:911497589902:web:faae5efe8dda0a3bef45df",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOzwald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

/*
signInWithEmailAndPassword(auth, "omran@gmail.com", "test123")
        .then((userCredential) => {
          console.log(userCredential.user);
        })
        .catch((e) => {
          console.log(e.code);
        });*/
