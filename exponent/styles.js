import Exponent from 'exponent';
import React from 'react';

import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  /*
  //TODO: WELCOME SCREEN
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  */
  container: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },

  inputContainer: {
    flex: 1,
    backgroundColor: 'powderblue',
  },

  textBox: {
    flex: 1,
    fontSize: 20,
    height: 20,
    textAlign: 'center',
    marginBottom: 10,
  },

  map: {
    backgroundColor: 'skyblue',
    flex: 4,    
  },

  mapLink: {
    backgroundColor: 'steelblue',
    flex: 1,    
  },
  // container: {
  //   ...StyleSheet.absoluteFillObject,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  button: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'rgba(220,220,220,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: 12,
    borderRadius: 20,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;