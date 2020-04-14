/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View
} from 'react-native';
import Button from './components/Button';
import ButtonTypes from './model/ButtonTypes';

const App: () => React$Node = () => {
  const [isLoading, setLoading] = useState(0);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          {/*{!!isLoading &&*/}
            <View style={styles.spinner}>
              <ActivityIndicator size="large" color="#0000ff"/>
            </View>
          {/*}*/}
          <Button buttonType={ButtonTypes.Power} setLoading={setLoading}/>
          <Button buttonType={ButtonTypes.Power} setLoading={setLoading}/>
          <Button buttonType={ButtonTypes.Power} setLoading={setLoading}/>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

export default App;
