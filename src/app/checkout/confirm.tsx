import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

export default function ConfirmForm() {
  const onNext = () => {
    //validate form

    // submit the data

    // redire next
    router.dismissAll(); // cant go back after submitting the form
    router.back();
  };

  return (
    <View style={container}>
      <Text>Confirm Form submission</Text>
      <CustomButton onPress={onNext} title="Submit" style={button} />
    </View>
  );
}

const { container, button } = StyleSheet.create({
  container: { backgroundColor: "white", padding: 10, flex: 1 },
  button: { marginTop: "auto", marginBottom: 25 },
});
