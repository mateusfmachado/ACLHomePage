import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  Dimensions
} from 'react-native';

import EventPage from './EventPage';
import AboutPage from './AboutPage';

let {width, height} = Dimensions.get("window");

export default class HomePage extends Component {
  render() {
    let pic = require("../resources/logo.png");
    return (
      <ScrollView>
        <Image style={styles.mainBanner} source={require("../resources/mainBanner.jpg")} >
          <View style={{flex:1,backgroundColor:"rgba(33, 33, 49,0.75)",justifyContent:"flex-end"}}>
            <Text style={{margin:15,fontSize:25,color:"#d7d7d7",fontFamily: "Helvetica"}}>ACL Music Festival</Text>
          </View>
        </Image>
        <Text style={styles.textMenu}>Events ></Text>
        <EventPage />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    paddingTop:10,
  },
  mainBanner: {
    height:200,
    width: 600
  },
  picHeader: {
    width: width*0.6, 
    height: 45
  },
  textMenu: {
    fontSize: 12,
    color: "#777",
    fontFamily: "Helvetica",
    marginTop: 14,
    marginBottom: 14,
    marginLeft: 10
  }
});

// <View style={styles.header}>
//   <Image source={pic} style={styles.picHeader}/>
// </View>

// <ScrollableTabView>
//           <EventPage tabLabel="Events" />
//           <AboutPage tabLabel="About" />
//         </ScrollableTabView>