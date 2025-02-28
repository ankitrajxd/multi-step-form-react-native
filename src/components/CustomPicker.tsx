import React, { ComponentProps } from "react";
import countries from "../../assets/countries.json";
import RNPickerSelect from "react-native-picker-select";
import { Control, useController } from "react-hook-form";

interface Props
  extends Omit<ComponentProps<typeof RNPickerSelect>, "onValueChange"> {
  name: string;
  control: Control<any>;
  error?: any;
}

const CustomPicker = ({ name, control, error, ...props }: Props) => {
  const {
    field: { value, onBlur, onChange },
  } = useController({ name, control });

  return (
    <RNPickerSelect
      value={value}
      {...props}
      onValueChange={onChange}
      onClose={onBlur}
      items={countries.map((country) => ({
        label: country.name,
        value: country.code,
      }))}
      style={{
        viewContainer: {
          marginTop: 10,
          marginBottom: 20,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "#80808050",
        },
      }}
    />
  );
};

export default CustomPicker;
