import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const Task = (props) => {
  const {text} = props;
  // const [task, doneTask] = useState(true);
  // const [del ,delTask] = useState()
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}>
          {/* <Button
            onPress={() => {
              doneTask(false);
            }}
            disabled={!task}
            title={task ? '' : 'done'}
          /> */}
        </View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.del}>
        {/* <Button title="x"/> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
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
    color: '#161d6f',
    fontWeight: 'bold',
    fontSize: 20,
  },
  del : {
    borderRadius: 30,
    backgroundColor : "red",
    color : "red"
  }
});

export default Task;
