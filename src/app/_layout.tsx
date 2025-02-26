import React from "react";
import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="checkout" options={{ headerShown: false }} />
    </Stack>
  );
}
