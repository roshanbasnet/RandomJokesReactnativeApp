/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

//./ means the same folder
import Input from './android/Components/Input/Input';
import Tinder from './android/Components/Tinder/Tinder'

import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


export default class RandomJokes extends Component {

  state = {
    value: '',
    // array
    jokes: [],
  }

// props are a channel to pass info from an instance to the class
  render() {
    return (
      <View style={styles.container}>
      <Text style = {styles.titleText}>Access Random Jokes</Text>
        <Input
          updateJokes={(jokes) => this.setState({ jokes: jokes })}
          value={this.state.value}
          onChange={(value) => this.setState({ value: value })}
        />
        <Tinder
          jokes={this.state.jokes}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 50
  },
  titleText:{
    marginTop:1,
    fontSize:22,
    fontWeight:'normal',
    color:'black',
    textAlign:'center'
  }

});
AppRegistry.registerComponent('RandomJokes', () => RandomJokes);
