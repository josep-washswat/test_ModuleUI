import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Button } from 'react-native';

//recoil useRecoilState
import { useRecoilState } from 'recoil';

//uiS03Atom
import { actionToggleAtom, imageUrlAtom } from '../atoms/uiS03Atom';
import useAfterRequest from '../hooks/useAfterRequest';

const process = (stringData) => {
  console.log('S04, process');
  Alert.alert('S04 processed received: ' + stringData);
};
const UIS04 = ({ jsonData, objectStorage }) => {
  const [actionToggle, setActionToggle] = useRecoilState(actionToggleAtom);
  const { request, data, isFetching } = useAfterRequest();

  useEffect(() => {
    if (!isFetching && data) {
      Alert.alert(data);
    }
  }, [isFetching, data]);

  useEffect(() => {
    if (actionToggle) {
      process('hi');
      setActionToggle(false);
    }
  }, [actionToggle]);

  return (
    <View style={style.main}>
      <Button onPress={request} title="Hi" disabled={isFetching} />
    </View>
  );
};

export default UIS04;

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
