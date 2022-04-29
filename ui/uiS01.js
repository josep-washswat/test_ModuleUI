import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Button, Image } from 'react-native';

const UIS01 = ({ jsonData, objectStorage }) => {
  const [text1, setText1] = useState(jsonData.text1);
  const [text2, setText2] = useState(jsonData.text2);
  useEffect(() => {
    console.log(jsonData.id);
  });

  return (
    <View Key="UI_S01" style={style.main}>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
    </View>
  );
};

export default UIS01;

const style = StyleSheet.create({
  main: {
    backgroundColor: 'yellow',
    fontFamily: 'Cochin',
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '100%',
  },
});
