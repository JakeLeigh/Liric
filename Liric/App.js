import React, {useEffect, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App() {
  const [lyric, setLyric] = useState('');
  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <View>
      <StatusBar backgroundColor="#203059" barStyle="default" />
      <Text style={styles.testTitle}>Liric</Text>
      <SearchBar
        placeholder='Enter Song Lyric'
        onChangeText={(e) => setLyric(e)}
        value={lyric}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  testTitle: {
    textAlign: 'center',
    fontSize: 38,
    marginTop: 65,
  },
});

export default App;
