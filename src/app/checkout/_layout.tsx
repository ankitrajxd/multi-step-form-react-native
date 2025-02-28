import { Slot, Stack } from "expo-router";
import React from "react";
import FormSteps from "../../components/FormSteps";
import { useFormStore } from "../../store/formStore";

export default function _layout() {
  const { currentStep } = useFormStore();

  return (
    <>
      <FormSteps currentStep={currentStep} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
