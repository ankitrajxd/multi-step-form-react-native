import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { ComponentProps } from "react";
import { FieldError } from "react-hook-form";

interface CustomTextInput extends ComponentProps<typeof TextInput> {
  label?: string;
  errors?: FieldError;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function CustomTextInput({
  errors,
  containerStyle,
  label,
  ...props
}: CustomTextInput) {
  // this is a very good example for creating custom compoennt. we are extending the built in props for input component

  const error = undefined;
  return (
    <View style={containerStyle}>
      {label && <Text style={style.label}>{label}</Text>}
      <TextInput
        {...props}
        style={[style.input, error ? style.errorInput : {}, props.style]} // props.style will take precendence
      />
      <Text numberOfLines={1} style={style.error}>
        {errors?.message}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 2,
  },
  label: {
    fontWeight: 600,
    color: "dimgray",
  },
  error: {
    color: "crimson",
    height: 17,
  },
  errorInput: {
    borderColor: "crimson",
  },
});
