import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class AboutPage extends Component {
  render() {
    return (
        <View style={styles.content}></View>
      );
  }
};

const styles = StyleSheet.create({
  content: {
    flex: 8,
    flexDirection: 'row',
    flexWrap: "wrap"
  }
});