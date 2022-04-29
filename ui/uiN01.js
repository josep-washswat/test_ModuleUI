import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

const UIN01 = ({ jsonData, objectStorage }) => {
  const [buttonText, setButtonText] = useState("Back Button");

  const process = (stringData) => {
    console.log("N01, process");
    Alert.alert("N01 processed received: " + stringData);
    setButtonText = stringData;
  };

  console.log(jsonData);
  console.log("N01,render");
  return (
    <View Key="UI_N01" style={style.main}>
      <Text>{buttonText}</Text>
    </View>
  );
};

export default UIN01;
const style = StyleSheet.create({
  main: {
    backgroundColor: "brown",
    alignItems: "flex-start",
    justifyContent: "center",
    height: 50,
    width: "100%",
  },
});
