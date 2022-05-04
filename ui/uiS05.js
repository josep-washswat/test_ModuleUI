import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Button, Text } from 'react-native';

import useAction from '../hooks/useAction';
import useAfterRequest from '../hooks/useAfterRequest';

const UIS05 = ({ jsonData, objectStorage }) => {
  const { id } = jsonData;
  const { action } = useAction();
  const { request, data, isFetching } = useAfterRequest();
  const [actionText, setActionText] = useState('');

  useEffect(() => {
    if (action.target === id) {
      setActionText(action.props.text);
      process(action.props.text);
    }
  }, [action]);

  useEffect(() => {
    if (!isFetching && data) {
      Alert.alert(data);
    }
  }, [isFetching, data]);

  useEffect(() => console.log(UIS05.name));
  return (
    <View style={style.main}>
      <Text>{actionText}</Text>
      <Button onPress={request} title="Hi" disabled={isFetching} />
    </View>
  );
};

export default UIS05;

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
