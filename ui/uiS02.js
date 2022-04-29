import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import { Component } from "react/cjs/react.production.min";
import { debug } from "../debug";

const UIS02 = ({ jsonData, objectStorageProp }) => {
  const [text1, setText1] = useState(jsonData.text1);
  const [text2, setText2] = useState(jsonData.text2);
  const [buttonText, setButtonText] = useState(jsonData.buttonText ?? "");
  const [targetObjectName, setTargetBut] = useState(jsonData.buttonTarget);
  const [objectStorage, setObjectStorage] = useState(objectStorageProp);

  const handlePress = () => {
    let target = targetObjectName;
    // let objectStorage = this.state.objectStorage;
    // Alert.alert("inside clicked:" + this.state.buttonText);
    objectStorage.forEach(function (element) {
      if (element.id === target) {
        element.object.process("test");
      }
    });
  };

  return (
    <View Key="UI_S02" style={style.main}>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
      <Button title={buttonText} onPress={handlePress} />
    </View>
  );
};

export default UIS02;
const style = StyleSheet.create({
  main: {
    backgroundColor: "green",
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    width: "100%",
  },
});
