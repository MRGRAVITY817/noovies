import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";

export default function App() {
  const [assets] = useAssets([require("./startup.jpg")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  // When you use hooks, it gives simplicity,
  // but if you want to give more functionalities,
  // you should make own preloading function.
  if (!assets || !loaded) {
    return <AppLoading onError={console.log} />;
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
