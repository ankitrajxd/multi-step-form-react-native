import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "../../store/formStore";
import FormSteps from "../../components/FormSteps";

const formDataSchema = z.object({
  fullName: z.string().min(1, "Name is required."),
  address: z.string().min(1, "Address is required."),
  city: z.string().min(1, "City is required."),
  postal: z.string().min(1, "Required."),
  phone: z.string().min(1, "Phone is required."),
});

export type PersonalFormData = z.infer<typeof formDataSchema>;

export default function PersonalDetailsForm() {
  const { setPersonalInfo, setCurrentStep, currentStep } = useFormStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalFormData>({
    defaultValues: {
      fullName: "John",
      address: "Street 0 ",
      phone: "123456789",
      city: "NYC",
      postal: "100000",
    },
    resolver: zodResolver(formDataSchema),
  });

  const onNext = (data: PersonalFormData) => {
    //validate form
    // console.log(data);
    console.log(data);
    setPersonalInfo(data);

    // redirect to next
    router.push("/checkout/payment");
  };

  useFocusEffect(
    useCallback(() => {
      setCurrentStep("Personal");
    }, [])
  );

  return (
    <KeyboardAwareScrollView>
      <FormSteps currentStep={currentStep} />

      <Controller
        name="fullName"
        control={control}
        // rules={{
        //   required: {
        //     value: true,
        //     message: "Name is required.",
        //   },
        // }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            id="fullName"
            label="Full name"
            onChangeText={onChange}
            value={value}
            errors={errors.fullName}
            placeholder="John Doe"
          />
        )}
      />
      <Controller
        name="address"
        control={control}
        // rules={{
        //   required: {
        //     value: true,
        //     message: "Address is required.",
        //   },
        // }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            id="address"
            label="Address"
            onChangeText={onChange}
            value={value}
            errors={errors.address}
            placeholder="Address"
          />
        )}
      />

      <View style={{ flexDirection: "row", gap: 5 }}>
        <View style={{ width: "50%" }}>
          <Controller
            name="city"
            control={control}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "City is required.",
            //   },
            // }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                containerStyle={{ flex: 1 }}
                label="City"
                onChangeText={onChange}
                placeholder="City"
                errors={errors.city}
                value={value}
              />
            )}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Controller
            name="postal"
            control={control}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Required.",
            //   },
            // }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                label="Post code"
                placeholder="100000"
                value={String(value)}
                onChangeText={onChange}
                errors={errors.postal}
              />
            )}
          />
        </View>
      </View>

      <Controller
        name="phone"
        control={control}
        // rules={{
        //   required: {
        //     value: true,
        //     message: "Phone is required.",
        //   },
        // }}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextInput
            containerStyle={{ flex: 1 }}
            inputMode="tel"
            label="Phone number"
            placeholder="1234567890"
            onChangeText={onChange}
            value={String(value)}
            errors={errors.phone}
          />
        )}
      />

      <CustomButton onPress={handleSubmit(onNext)} title="Next" />
    </KeyboardAwareScrollView>
  );
}
