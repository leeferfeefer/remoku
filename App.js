/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Button from './components/Button';
import ButtonTypes from './model/ButtonTypes';
import {Picker} from '@react-native-picker/picker';
import RemokuService from './services/Remoku.service';
import AsyncStorageService from './services/AsyncStorage.service';

const App: () => React$Node = () => {
  const [isLoading, setLoading] = useState(false);
  const [rokuFound, setRokuFound] = useState(false);
  const [tvIDs, setTvIDs] = useState([]);
  const [selectedTvID, setSelectedTvID] = useState('Select a TV ID');
  
  const getIDs = async () => {
    let tvIDs = await AsyncStorageService.getData('@tv_ids');
    tvIDs = tvIDs ?? [];
    setTvIDs(['Select a TV ID', ...tvIDs]);
  };
  
  useEffect(() => {
    getIDs();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          {isLoading &&
            <View style={styles.spinnerContainer}>
              <ActivityIndicator size="large" color="white"/>
            </View>
          }
          <View style={[styles.banner, {backgroundColor: rokuFound ? 'green' : 'red'}]}>
            <Text style={{textAlign: 'center'}}>{rokuFound ? 'Connected' : 'Not Connected'}</Text>
          </View>
          <TouchableOpacity onPress={AsyncStorageService.clearAll}>          
            <Text>Clear</Text>  
          </TouchableOpacity>
          <View style={[styles.header, styles.row]}>
            <Button buttonType={ButtonTypes.Power} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
          </View>
          <View style={styles.row}>
            <Button buttonType={ButtonTypes.Back} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
            <Button buttonType={ButtonTypes.SearchRoku} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}
              refreshTVIDs={getIDs}/>
            <Button buttonType={ButtonTypes.Options} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
          </View>
          <View style={styles.row}>
            <Button buttonType={ButtonTypes.Home} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
            <Button buttonType={ButtonTypes.Up} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
            <Button buttonType={ButtonTypes.Input} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
          </View>
          <View style={styles.row}>
            <Button buttonType={ButtonTypes.Left} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
            <Button buttonType={ButtonTypes.Select} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
            <Button buttonType={ButtonTypes.Right} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
          </View>
          <View style={styles.row}>
            <Button buttonType={ButtonTypes.VolumeDown} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
            <Button buttonType={ButtonTypes.Down} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
            <Button buttonType={ButtonTypes.VolumeUp} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
          </View>
          <View style={styles.row}>
            <Button buttonType={ButtonTypes.Mute} setLoading={setLoading} 
              setRokuFound={(newValue) => newValue !== rokuFound && setRokuFound(newValue)}/>
          </View>
          <Picker
              selectedValue={selectedTvID}
              style={styles.picker}
              prompt="Pick one, just one"
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) => {
                RemokuService.setBaseURL(itemValue);
                setSelectedTvID(itemValue);
              }}>
                {tvIDs.map((tvID, index) => {
                  return (<Picker.Item key={index} label={`${tvID}`} value={`${tvID}`}/>);
                })}        
          </Picker>        
        </View>        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'gray',
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
  spinnerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  picker: {
    height: 150
  },
});

export default App;
