import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useAction from '../hooks/useAction';

const UIS01 = ({ jsonData }) => {
  const { text1, text2, id } = jsonData;
  const [actionText, setActionText] = useState('');
  const { action } = useAction();

  useEffect(() => {
    if (action.target === id) {
      setActionText(action.props.text);
    }
  }, [action]);

  useEffect(() => console.log(UIS01.name));
  return (
    <View style={style.main}>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
      <Text>{actionText}</Text>
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
