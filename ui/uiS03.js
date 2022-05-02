import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Alert, Image } from 'react-native';
import useAction from '../hooks/useAction';

const process = (stringData) => {
  Alert.alert('S03 processed received: ' + stringData);
};
const UIS03 = ({ jsonData }) => {
  const { imageUrl, id } = jsonData;
  const { action } = useAction();
  const [actionText, setActionText] = useState('');

  useEffect(() => {
    if (action.target === id) {
      setActionText(action.props.text);
    }
  }, [action]);

  useEffect(() => console.log(UIS03.name));
  useEffect(() => {
    if (action?.target === id) {
      process('change!');
    }
  }, [action]);

  return (
    <View style={style.main}>
      <Text>{actionText}</Text>
      <Image style={{ width: '100%', height: 110 }} source={{ uri: imageUrl }} />
    </View>
  );
};

export default UIS03;

const style = StyleSheet.create({
  main: {
    backgroundColor: 'orange',
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: '100%',
  },
});
