import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

//uiS0Atom
import useAction from '../hooks/useAction';

const UIS02 = ({ jsonData }) => {
  const { id, text1, text2, buttonText } = jsonData;
  const [targetText, setTargetText] = useState('');
  const [propText, setPropText] = useState('');
  const { action, callAction } = useAction();
  const [actionText, setActionText] = useState('');

  useEffect(() => {
    if (action.target === id) {
      setActionText(action.props.text);
    }
  }, [action]);

  useEffect(() => console.log(UIS02.name));
  const handlePress = () => {
    callAction(targetText, { text: propText });
  };

  return (
    <View style={style.main}>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
      <Text>{actionText}</Text>
      <TextInput onChangeText={setTargetText} value={targetText} style={style.input} />
      <TextInput onChangeText={setPropText} value={propText} style={style.input} />
      <Button title={buttonText} onPress={handlePress} />
    </View>
  );
};

export default UIS02;
const style = StyleSheet.create({
  main: {
    backgroundColor: 'green',
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    width: '100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
