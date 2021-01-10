import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View>
      <Text style={styles.testTitle}>Litic</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  testTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 65,
  },
});

export default App;
