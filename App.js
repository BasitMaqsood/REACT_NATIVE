import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: Dimensions.get('screen').width, flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ backgroundColor: 'green', padding: 20, margin: 10 }}>
        </View>
        <View style={{ backgroundColor: 'green', padding: 20, margin: 10 }}>
        </View>
        <View style={{ backgroundColor: 'green', padding: 20, margin: 10 }}>
        </View>
      </View>
      <View style={{ width: Dimensions.get('screen').width / 2, flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ backgroundColor: 'green', padding: 20, margin: 10 }}>
        </View>
        <View style={{ backgroundColor: 'green', padding: 20, margin: 10 }}>
        </View>
        <View style={{ backgroundColor: 'green', padding: 20, margin: 10 }}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
