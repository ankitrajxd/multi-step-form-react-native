import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Step } from "../store/formStore";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  currentStep: Step;
}

const steps = ["Personal", "Payment", "Confirm"];

const FormSteps = ({ currentStep }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {steps.map((s) => (
        <Text
          key={s}
          style={[styles.stepText, s === currentStep && styles.activeStep]}
        >
          {s}
        </Text>
      ))}
    </SafeAreaView>
  );
};

export default FormSteps;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 110,
    alignItems: "center",
    marginHorizontal: 20,
  },
  stepText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#666",
  },
  activeStep: {
    color: "#007b7f",
    fontWeight: "700",
    borderBottomWidth: 3,
    borderBottomColor: "#007b7f",
    borderBottomEndRadius: 3,
  },
});
