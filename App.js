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
  View,
  Text
} from 'react-native';
import Button from './components/Button';
import ButtonTypes from './model/ButtonTypes';

const App: () => React$Node = () => {
  const [isLoading, setLoading] = useState(false);
  const [rokuFound, setRokuFound] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          {isLoading &&
            <View style={styles.spinner}>
              <ActivityIndicator size="large" color="white"/>
            </View>
          }

          <View style={[styles.banner, {backgroundColor: rokuFound ? 'green' : 'red'}]}>
            <Text style={{textAlign: 'center'}}>{rokuFound ? 'Connected' : 'Not Connected'}</Text>
          </View>

          <View style={[styles.header, styles.row]}>
            <Button buttonType={ButtonTypes.Power} setLoading={setLoading} setRokuFound={setRokuFound}/>
          </View>
          <View style={styles.row}>
            <Button buttonType={ButtonTypes.Back} setLoading={setLoading}/>
            <Button buttonType={ButtonTypes.SearchRoku} setLoading={setLoading} setRokuFound={setRokuFound}/>
            <Button buttonType={ButtonTypes.Options} setLoading={setLoading}/>
          </View>
          <View style={styles.row}>
            <Button buttonType={ButtonTypes.Home} setLoading={setLoading}/>
            <Button buttonType={ButtonTypes.Up} setLoading={setLoading}/>
            <Button buttonType={ButtonTypes.Input} setLoading={setLoading}/>
          </View>
          <View style={styles.row}>
            <Button buttonType={ButtonTypes.Left} setLoading={setLoading}/>
            <Button buttonType={ButtonTypes.Select} setLoading={setLoading}/>
            <Button buttonType={ButtonTypes.Right} setLoading={setLoading}/>
          </View>
          <View style={styles.row}>
            <Button buttonType={ButtonTypes.VolumeDown} setLoading={setLoading}/>
            <Button buttonType={ButtonTypes.Down} setLoading={setLoading}/>
            <Button buttonType={ButtonTypes.VolumeUp} setLoading={setLoading}/>
          </View>
          <View style={styles.row}>
            <Button buttonType={ButtonTypes.Mute} setLoading={setLoading}/>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around'
  },
  banner: {
    height: 20
  },
  header: {
    paddingTop: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  }
});

export default App;
