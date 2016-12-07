import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
let {width, height} = Dimensions.get("window");

export default class Event extends Component {
  render() {
    var typeStar = this.props.event.marked ? "star" : "star-o";
    var star = (
        <Text style={{margin: 10}}>
          <Icon name={typeStar} size={15} color="#d3ba00" />
        </Text>
      );
    var label;
    if(this.props.labelSizeBig === "1"){
      label = (<View style={styles.topLabelBig}>{star}</View>);
    } else {
      label = (<View style={styles.topLabel}>{star}</View>);
    }
    return (      
      <TouchableOpacity>
        <Image source={this.props.event.pic} style={this.props.styleImage}>
          {label}
          <View style={styles.labelEvent}>
            <Text style={styles.textLabel}>
              {this.props.event.name}
            </Text>
          </View>
        </Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  labelEvent: {              
    backgroundColor: "#212131",
    flex:1,
    width: 100,
    height: 15,
    marginBottom:15,
    marginLeft:5,
    borderRadius: 10, 
    justifyContent: "center"
  },
  textLabel: {
    alignSelf:"flex-start",
    fontSize: 10 ,
    color: "#d7d7d7",
    fontFamily: "Monospace",
    marginLeft:10
  },
  topLabelBig: {flex: 6, alignItems:"flex-end"},
  topLabel: {flex: 3, alignItems:"flex-end"}
});