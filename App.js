import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require("./startup.jpg"));
    // await Image.prefetch("") <- prefetch remote image
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.log}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Text>We are ready to use app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
