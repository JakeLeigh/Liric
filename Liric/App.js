import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput} from 'react-native';
import { Input } from 'react-native-elements';
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
      <TextInput 
      style = {styles.input}
        onChangeText={lyric => {setLyric(lyric)}}
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
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
});

export default App;
