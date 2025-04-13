import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles/styles";

export function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>PASSWORD</Text>
      <Text style={styles.title2}>GENERATOR</Text>
    </View>
  );
}
