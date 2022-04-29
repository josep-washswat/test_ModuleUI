import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Image } from "react-native";

const UIS03 = ({ jsonData, objectStorage }) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (jsonData.imageUrl) {
      setImageUrl({ uri: jsonData.imageUrl });
    }
  }, [jsonData.imageUrl]);

  const process = (stringData) => {
    console.log("S03, process");
    Alert.alert("S03 processed received: " + stringData);
  };

  return (
    <View Key="UI_S03" style={style.main}>
      <Image style={{ width: "100%", height: 110 }} source={imageUrl} />
    </View>
  );
};

export default UIS03;

const style = StyleSheet.create({
  main: {
    backgroundColor: "violet",
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    width: "100%",
  },
});
