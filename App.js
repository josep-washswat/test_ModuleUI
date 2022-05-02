import { StyleSheet, Text, View, Alert, Button, Image } from 'react-native';

import { QueryClient, QueryClientProvider } from 'react-query';
import ProcessScreen from './ProcessScreen';
import { Provider } from 'jotai';

///////////////////////////////////////////////////////////////////////////////////////////////////
// Main Routine
///////////////////////////////////////////////////////////////////////////////////////////////////
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <View style={styles.container}>
          <ProcessScreen />
        </View>
      </Provider>
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
