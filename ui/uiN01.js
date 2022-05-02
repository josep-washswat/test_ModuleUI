import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

//jotai useAtom
import { useAtom } from 'jotai';

//uiN01 buttonTextAtom component
import { actionToggleAtom } from '../atoms/uiN01Atom';

const process = (action, stringData) => {
  console.log('N01, process');
  Alert.alert('N01 processed received: ' + stringData);
  action(stringData);
};

const UIN01 = ({ jsonData }) => {
  const { buttonText: btnText } = jsonData;
  const [buttonText, setButtonText] = useState(btnText);
  const [actionToggle, setActionToggle] = useAtom(actionToggleAtom);

  useEffect(() => {
    if (actionToggle) {
      process(setButtonText, 'change!');
      setActionToggle(!actionToggle);
    }
  }, [actionToggle]);

  useEffect(() => {
    console.log(jsonData.id);
  });

  return (
    <View Key="UI_N01" style={style.main}>
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
