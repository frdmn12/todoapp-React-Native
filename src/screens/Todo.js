import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    const {text} = props
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal : 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 15,
    height: 15,
    backgroundColor: '#161d6f',
    opacity: 0.4,
    borderRadius: 40,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color : "#161d6f",
    fontWeight : "bold",
    fontSize : 20
  },
});

export default Task;