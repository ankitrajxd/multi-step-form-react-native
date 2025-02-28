import { zodResolver } from "@hookform/resolvers/zod";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { z } from "zod";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { useFormStore } from "../../store/formStore";
import countries from "../../../assets/countries.json";
import CustomPicker from "../../components/CustomPicker";

const formDataSchema = z.object({
  fullName: z.string().min(1, "Name is required."),
  address: z.string().min(1, "Address is required."),
  city: z.string().min(1, "City is required."),
  postal: z.string().min(1, "Required."),
  country: z.string().length(2),
  phone: z.string().min(1, "Phone is required."),
});

export type PersonalFormData = z.infer<typeof formDataSchema>;

export default function PersonalDetailsForm() {
  const { setPersonalInfo, setCurrentStep, currentStep, personalInfo } =
    useFormStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalFormData>({
    defaultValues: {
      address: "street 0",
      city: "nyc",
      fullName: "John",
      phone: "3483984938493",
      postal: "797979",
      country: "IN",
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

      <CustomPicker
        control={control}
        error={errors.country}
        name="country"
        placeholder={{ label: "Select country" }}
        items={countries.map((country) => ({
          label: country.name,
          value: country.code,
        }))}
      />

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
