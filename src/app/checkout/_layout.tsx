import { Text, View } from "react-native";
import React, { Component } from "react";
import { Stack } from "expo-router";

export default class CheckoutLayout extends Component {
  render() {
    return (
      <Stack screenOptions={{ headerShadowVisible: false }}>
        <Stack.Screen name="personal" options={{ title: "Personal" }} />
        <Stack.Screen name="payment" options={{ title: "Payment" }} />
        <Stack.Screen name="confirm" options={{ title: "Confirm" }} />
      </Stack>
    );
  }
}
