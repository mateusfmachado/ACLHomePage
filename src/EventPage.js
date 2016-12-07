import React, { Component } from 'react';
import {
  StyleSheet,  
  View,
} from 'react-native';
import EventGroup from './EventGroup';

const events = [
  [
    {
      id: 1,
      pic: require("../resources/event1.jpg"),
      name: "New Music",
      marked: true
    },
    {
      id: 2,
      pic: require("../resources/event2.jpg"),
      name: "Nice Music",
      marked: false
    },
    {
      id: 3,
      pic: require("../resources/event3.jpg"),
      name: "Featured",
      marked: true
    }
  ],
  [
    {
      id: 4,
      pic: require("../resources/event4.jpg"),
      name: "New Music",
      marked: false
    },
    {
      id: 5,
      pic: require("../resources/event5.jpg"),
      name: "New Music",
      marked: true
    },
    {
      id: 6,
      pic: require("../resources/event6.jpg"),
      name: "Nice Show",
      marked: true
    }
  ],
  [
    {
      id: 7,
      pic: require("../resources/event7.jpg"),
      name: "New Music",
      marked: false
    },
    {
      id: 8,
      pic: require("../resources/event3.jpg"),
      name: "Great Show",
      marked: true
    },
    {
      id: 9,
      pic: require("../resources/event6.jpg"),
      name: "Featured",
      marked: false
    }  
  ]
];

export default class EventPage extends Component {
  constructor() {
    super();
    this.state = {
      events: events
    };  
  }
  
  render() {
    return ( 
      <View style={styles.eventContainer}>     
        {this.state.events.map(function(event){
          return <EventGroup events={event} key={event[0].id}/>;
        })}           
      </View>        
    );
  }
};

const styles = StyleSheet.create({
  content: {
    flex: 8,
    flexDirection: 'row',
    flexWrap: "wrap"
  },
  headerSecond: {
    fontSize: 20,
    fontFamily: "Monospace",
    color: "#474747"
  },
  eventContainer: {
  	/*backgroundColor: "#acbe27"*/
  	backgroundColor: "#efefef"
  }
});