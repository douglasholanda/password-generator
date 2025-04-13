import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import { styles } from "./styles/styles";
import generatePass from "../../services/generatePass";

export function InputPass() {
  const [pass, setPass] = useState("");

  const handleCopy = async () => {
    await Clipboard.setStringAsync(pass);
  };

  const handleGenerate = () => {
    const _pass = generatePass(8);
    setPass(_pass);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={pass}
        placeholder="password"
        textAlign="center"
      />
      <TouchableOpacity
        style={styles.containerBtn}
        activeOpacity={0.8}
        onPress={handleGenerate}
      >
        <Text style={styles.textBtn}>GENERATE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerBtn2}
        activeOpacity={0.8}
        onPress={handleCopy}
      >
        <Text style={styles.textBtn2}>COPY</Text>
      </TouchableOpacity>
    </View>
  );
}
