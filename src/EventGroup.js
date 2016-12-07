import React, { Component } from 'react';
import {
  StyleSheet,  
  View,  
  Dimensions,
} from 'react-native';
import Event from './Event';
let {width, height} = Dimensions.get("window");

export default class EventGroup extends Component {
  render() {
    return(
        <View style={styles.imagesGroup}>
          <View style={styles.bigImageView}>
            <Event event={this.props.events[0]} styleImage={styles.imageEventBig} labelSizeBig="1"/>
          </View>
          <View style={styles.littleImageView}>
            <Event event={this.props.events[1]} styleImage={styles.imageEvent} />
            <Event event={this.props.events[2]} styleImage={styles.imageEvent} />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  imageEvent: {
    width: width/3,
    height: height/6,
    flexGrow: 1,
  },
  imageEventBig: {
    width: width/1.5,
    height: height/3,
    flexGrow: 1,
  },
  bigImageView: {
    flex:2
  },
  littleImageView: {
    flexDirection: "column",
    flex:1
  },
  imagesGroup: {
    flexDirection: "row",
    flex:1,
    marginBottom: 40
  }
});