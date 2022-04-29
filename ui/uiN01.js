import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

//jotai useAtom
import { useAtom } from 'jotai';

//uiN01 buttonTextAtom component
import { actionToggleAtom, buttonTextAtom } from '../atoms/uiN01Atom';

const UIN01 = ({ jsonData, objectStorage }) => {
  const [buttonText, setButtonText] = useAtom(buttonTextAtom);
  const [actionToggle, setActionToggle] = useAtom(actionToggleAtom);

  useEffect(() => {
    if (actionToggle) {
      console.log('UIN01');
      const process = (stringData) => {
        console.log('N01, process');
        Alert.alert('N01 processed received: ' + stringData);
        setButtonText(stringData);
      };
      process('hihi');
      setActionToggle(() => false);
    }
  }, [actionToggle]);

  useEffect(()=>{
    console.log(jsonData.id)
  })
  // console.log(jsonData);
  // console.log('N01,render');
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
