import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import HomePage from './src/HomePage';

export default class ACLHomePage extends Component {
  render() {
    return <HomePage />;
  }
}

AppRegistry.registerComponent('ACLHomePage', () => ACLHomePage);
