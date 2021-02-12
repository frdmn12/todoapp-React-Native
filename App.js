import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {Todo} from './src/screens';

const [task, setTask] = useState();
// const [] = useState([]);

const handleTask = () => {
  console.log(task);
};

const App = () => {
  return (
    <View style={styles.containers}>
      {/* Main Title */}
      <Text style={styles.titleDays}>Todo list</Text>

      {/* The task */}
      <ScrollView>
        <View style={styles.taskContainer}>
          <Todo text="Task 1 masak nasi goreng di rumah" />
        </View>
      </ScrollView>

      {/*  The Input */}
      <KeyboardAvoidingView>
        <View style={styles.inputContain}>
          <View>
            <TextInput
              style={styles.inputText}
              placeholder="Write your task"
              placeholderTextColor="white"
              // value={task}
              // onChange={text => setTask(text)}
            />
          </View>
          <View style={styles.buttonAdd}>
            {/* <Button title="+" /> */}
            <TouchableOpacity
              // onPress={() => {
              //   handleTask();
              // }}
              >
              <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    // backgroundColor: '#f6f6f6',
  },
  taskContainer: {
    backgroundColor: '#161d6f',
    padding: 3,
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  titleDays: {
    marginVertical: 10,
    marginHorizontal: 4,
    borderRadius: 10,
    paddingLeft: 14,
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: '#161d6f',
    color: '#c7ffd8',
    borderColor: '#FFF',
  },
  inputContain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: "f6f6f6"
    // marginBottom :4
  },
  inputText: {
    backgroundColor: '#161d6f',
    color: '#fff',
    paddingHorizontal: 100,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonAdd: {
    padding: 20,
    backgroundColor: '#c7ffd8',
    marginBottom: 4,
    borderRadius: 25,
  },
  btn: {
    fontSize: 20,
  },
});

export default App;
