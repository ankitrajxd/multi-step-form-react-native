import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useEffect } from "react";
import CustomButton from "../../components/CustomButton";
import { router, useFocusEffect } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomTextInput from "../../components/CustomTextInput";
import { useFormStore } from "../../store/formStore";
import FormSteps from "../../components/FormSteps";

const formDataSchema = z.object({
  cardNumber: z.string().min(1, "Card Number is required"),
  expires: z.string(),
  cvv: z.string().min(1, "cvv is required"),
});

export type PaymentFormType = z.infer<typeof formDataSchema>;

export default function PaymentDetailsForm() {
  const { setpaymentInfo, setCurrentStep, currentStep } = useFormStore();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PaymentFormType>({
    defaultValues: {
      cardNumber: "1234567890",
      expires: "12/23",
      cvv: "123",
    },
    resolver: zodResolver(formDataSchema),
  });

  const onNext = (data: PaymentFormType) => {
    // validated data
    console.log(data);
    setpaymentInfo(data);

    // redirect next
    router.push("/checkout/confirm");
  };

  useFocusEffect(
    useCallback(() => {
      setCurrentStep("Payment");
    }, [])
  );

  return (
    <KeyboardAwareScrollView>
      <FormSteps currentStep={currentStep} />
      <Controller
        name="cardNumber"
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <CustomTextInput
            id="cardNumber"
            label="Card"
            onChangeText={onChange}
            value={value}
            errors={errors.cardNumber}
            placeholder="1234567890"
          />
        )}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          gap: 6,
        }}
      >
        <View style={{ flex: 1 }}>
          <Controller
            name="expires"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <CustomTextInput
                id="expires"
                label="Expiry"
                onChangeText={onChange}
                value={String(value)}
                errors={errors.expires}
                placeholder="12/24"
              />
            )}
          />
        </View>
        <Controller
          name="cvv"
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              id="CVV"
              label="CVV"
              onChangeText={onChange}
              value={value}
              errors={errors.cvv}
              placeholder="345"
            />
          )}
        />
      </View>
      <CustomButton
        onPress={handleSubmit(onNext)}
        title="Next"
        style={button}
      />
    </KeyboardAwareScrollView>
  );
}

const { container, button } = StyleSheet.create({
  container: { backgroundColor: "white", padding: 10, flex: 1 },
  button: { marginTop: "auto", marginBottom: 25 },
});
