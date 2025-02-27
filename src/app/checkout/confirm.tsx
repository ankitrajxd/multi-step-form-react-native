import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useEffect } from "react";
import CustomButton from "../../components/CustomButton";
import { Link, router, useFocusEffect } from "expo-router";
import { useFormStore } from "../../store/formStore";
import FormSteps from "../../components/FormSteps";

export default function ConfirmForm() {
  const { paymentInfo, personalInfo, setCurrentStep, currentStep } =
    useFormStore();

  useFocusEffect(
    useCallback(() => {
      setCurrentStep("Confirm");
    }, [])
  );

  return (
    <View style={styles.container}>
      <FormSteps currentStep={currentStep} />
      <View style={{ flex: 1, gap: 10 }}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Personal Information</Text>
              <Link href={"/checkout"} style={styles.editLink}>
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key} style={styles.infoText}>
                <Text style={styles.label}>{key}:</Text> {value}
              </Text>
            ))}
          </View>
        )}
        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Payment Details</Text>
              <Link href={"/checkout/payment"} style={styles.editLink}>
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key} style={styles.infoText}>
                <Text style={styles.label}>{key}:</Text> {value}
              </Text>
            ))}
          </View>
        )}
      </View>

      {/* Submit Button */}
      <CustomButton onPress={() => {}} title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingBottom: 30,
    gap: 20,
  },
  dataContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  dataContainerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  editLink: {
    color: "#007B7F",
    fontWeight: "600",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: "#E6F2F2",
  },
  infoText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  label: {
    fontWeight: "600",
    color: "#222",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007B7F",
    paddingVertical: 12,
    borderRadius: 8,
  },
});
