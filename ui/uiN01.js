import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import useAction from '../hooks/useAction';

const process = (action, stringData) => {
  Alert.alert('N01 processed received: ' + stringData);
  action(stringData);
};

const UIN01 = ({ jsonData }) => {
  const { buttonText: btnText, id } = jsonData;
  const [buttonText, setButtonText] = useState(btnText);
  const { action } = useAction();

  useEffect(() => {
    if (action?.target === id) {
      process(setButtonText, 'change!');
    }
  }, [action]);

  useEffect(() => console.log(UIN01.name));
  return (
    <View style={style.main}>
      <Text>{buttonText}</Text>
    </View>
  );
};

export default UIN01;
const style = StyleSheet.create({
  main: {
    backgroundColor: 'brown',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
});
