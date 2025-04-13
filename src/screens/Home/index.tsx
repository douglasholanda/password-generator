import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

import { styles } from "./styles/styles";
import { Logo } from "../../components/Logo";
import { InputPass } from "../../components/InputPass";
import { StatusBar } from "expo-status-bar";

export function Home() {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Logo />
          <InputPass />
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="light" />
    </>
  );
}
