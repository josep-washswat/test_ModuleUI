import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//jotai useAtom
import { useAtom } from 'jotai';

//uiS0Atom
import useAction from '../hooks/useAction';

const UIS02 = ({ jsonData }) => {
  const [text1, setText1] = useState(jsonData.text1);
  const [text2, setText2] = useState(jsonData.text2);
  const [buttonText, setButtonText] = useState('');
  const { setAction } = useAction();
  useEffect(() => {
    console.log(jsonData.id);
  });
  useEffect(() => {
    if (jsonData?.buttonText) {
      setButtonText(jsonData.buttonText);
    }
  }, [jsonData.buttonText]);

  const handlePress = useCallback(() => {
    setAction(jsonData.buttonTarget);
  }, []);

  return (
    <View Key="UI_S02" style={style.main}>
      <Text>{text1}</Text>
      <Text>{text2}</Text>
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
    height: 120,
    width: '100%',
  },
});
