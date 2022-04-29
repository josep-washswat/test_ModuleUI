import { StyleSheet, Text, View, Alert, Button, Image } from 'react-native';
import uiClassFactory from './ui/uiClassFactory';

import { debug } from './debug';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProcessScreen from './ProcessScreen';

const jsonData = {
  elements: [
    {
      id: 'uiBlank',
    },
    {
      id: 'uiN01',
    },
    {
      id: 'uiS01',
      text1: '매일 밤 11시',
      text2: '수거가 시작됩니다.',
    },
    {
      id: 'uiS02',
      text1: '수거: 9/19(월) 밤 11시',
      text2: '배송: 9/22(목) 아침 7시',
      buttonText: '변경',
      buttonTarget: 'uiS03',
    },
    {
      id: 'uiS03',
      imageUrl: 'https://picsum.photos/400/200',
    },
    // {
    //   id: "uiS01",
    //   text1: "이것은",
    //   text2: "테스트입니다.",
    // },
  ],
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// Main Routine
///////////////////////////////////////////////////////////////////////////////////////////////////
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <ProcessScreen />
      </View>
    </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

///////////////////////////////////////////////////////////////////////////////////////////////////
// Process routine
///////////////////////////////////////////////////////////////////////////////////////////////////
