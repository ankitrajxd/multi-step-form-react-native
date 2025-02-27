import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Step } from "../store/formStore";

interface Props {
  currentStep: Step;
}

const steps = ["Personal", "Payment", "Confirm"];

const FormSteps = ({ currentStep }: Props) => {
  return (
    <View style={styles.container}>
      {steps.map((s) => (
        <Text
          key={s}
          style={[styles.stepText, s === currentStep && styles.activeStep]}
        >
          {s}
        </Text>
      ))}
    </View>
  );
};

export default FormSteps;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginHorizontal: 20,
    marginTop: 40,
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
