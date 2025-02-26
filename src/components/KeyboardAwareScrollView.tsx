import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";
import React, { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KeyboardAwareScrollView({
  children,
}: PropsWithChildren) {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
        keyboardVerticalOffset={110}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  keyboardView: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    padding: 20,
    gap: 10,
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    gap: 10,
    justifyContent: "space-between",
  },
});
