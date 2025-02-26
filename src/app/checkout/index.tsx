import { Text, View } from "react-native";
import React, { Component } from "react";
import { Redirect } from "expo-router";

export default class InitCheckoutFlow extends Component {
  render() {
    return <Redirect href={"/checkout/personal"} />;
  }
}
