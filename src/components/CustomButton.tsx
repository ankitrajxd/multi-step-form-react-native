import { ComponentProps, forwardRef, ReactNode } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";

type CustomButton = {
  rightIcon?: ReactNode;
  title: string;
  style?: StyleProp<ViewStyle>;
} & ComponentProps<typeof Pressable>;

const CustomButton = forwardRef<View, CustomButton>(
  ({ rightIcon, title, style, ...pressableProps }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={({ pressed }) => [
          styles.button,
          style,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>{title}</Text>
        <View style={styles.rightIconContainer}>{rightIcon}</View>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  rightIconContainer: {
    position: "absolute",
    right: 20,
  },
  buttonPressed: {
    backgroundColor: "#003a3e",
  },
});

export default CustomButton;
