import { StyleSheet, Text, View, Alert, Button, Image } from 'react-native';

import { QueryClient, QueryClientProvider } from 'react-query';
import ProcessScreen from './ProcessScreen';
import { Provider } from 'jotai';
import {RecoilRoot} from 'recoil'

///////////////////////////////////////////////////////////////////////////////////////////////////
// Main Routine
///////////////////////////////////////////////////////////////////////////////////////////////////
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <View style={styles.container}>
          <ProcessScreen />
        </View>
      </RecoilRoot>
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
