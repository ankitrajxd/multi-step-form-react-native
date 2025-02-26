import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function PaymentDetailsForm() {
  const onNext = () => {
    //validate form

    // redire next
    router.push("/checkout/confirm");
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Payment details</Text>
      <CustomButton onPress={onNext} title="Next" style={button} />
    </KeyboardAwareScrollView>
  );
}

const { container, button } = StyleSheet.create({
  container: { backgroundColor: "white", padding: 10, flex: 1 },
  button: { marginTop: "auto", marginBottom: 25 },
});
