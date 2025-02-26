import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link, Stack } from "expo-router";
import CustomButton from "../components/CustomButton";

const index = () => {
  return (
    <View style={home}>
      <Stack.Screen options={{ title: "Home" }} />
      <Link href={"/checkout"} asChild>
        <CustomButton title="Checkout" />
      </Link>
      <StatusBar animated />
    </View>
  );
};

export default index;

const { home } = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
