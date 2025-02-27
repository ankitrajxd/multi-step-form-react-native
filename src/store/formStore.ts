import { create } from "zustand";
import { PersonalFormData } from "../app/checkout/personal";
import { PaymentFormType } from "../app/checkout/payment";

interface formStoreType {
  personalInfo: PersonalFormData;
  paymentInfo: PaymentFormType;
  currentStep: Step;
  setPersonalInfo: (data: PersonalFormData) => void;
  setpaymentInfo: (data: PaymentFormType) => void;
  setCurrentStep: (step: Step) => void;
}

export type Step = "Personal" | "Payment" | "Confirm" | "";

export const useFormStore = create<formStoreType>(function (set) {
  return {
    personalInfo: {
      fullName: "",
      address: "",
      city: "",
      phone: "",
      postal: "",
    },
    paymentInfo: {
      cardNumber: "",
      cvv: "",
      expires: "",
    },
    currentStep: "",
    setPersonalInfo(data) {
      set({
        personalInfo: data,
      });
    },

    setpaymentInfo: (data) => set({ paymentInfo: data }),
    // setpaymentInfo: (data) => set((state) => ({ paymentInfo: data })),
    setCurrentStep: (step) => set({ currentStep: step }),
  };
});
