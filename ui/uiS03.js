import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native';

//recoil useRecoilState
import { useRecoilState } from 'recoil';

//uiS03Atom
import { actionToggleAtom } from '../atoms/uiS03Atom';


const process = (stringData) => {
  console.log('S03, process');
  Alert.alert('S03 processed received: ' + stringData);
};
const UIS03 = ({ jsonData }) => {
  const { imageUrl } = jsonData;
  const [actionToggle, setActionToggle] = useRecoilState(actionToggleAtom);

  useEffect(() => {
    console.log(jsonData.id);
  });

  useEffect(() => {
    if (actionToggle) {
      process('hi');
      setActionToggle(false);
    }
  }, [actionToggle]);

  return (
    <View style={style.main}>

      <Image style={{ width: '100%', height: 110 }} source={{ uri: imageUrl }} />
    </View>
  );
};

export default UIS03;

const style = StyleSheet.create({
  main: {
    backgroundColor: 'violet',
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: '100%',
  },
});
