import { StyleSheet, Text, View, Alert, Button, Image } from 'react-native';

const UIBlank = ({ jsonData, objectStorage }) => {
  return <View Key="UI_Blank" style={style.main} />;
};

const style = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
});

export default UIBlank;
