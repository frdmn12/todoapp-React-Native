import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Todo} from './src/screens';

const App = () => {
  return (
    <View style={styles.containers}>
      <Text style={styles.titleDays}>Todo list</Text>
      <ScrollView>
        <View style={styles.taskContainer}>
          <Todo text="Task 1 masak nasi goreng di rumah" />
          <Todo text="Task 1 masak nasi goreng di rumah" />
          <Todo text="Task 1 masak nasi goreng di rumah" />
          <Todo text="Task 1 masak nasi goreng di rumah" />
          <Todo text="Task 1 masak nasi goreng di rumah" />
          <Todo text="Task 1 masak nasi goreng di rumah" />
          <Todo text="Task 1 masak nasi goreng di rumah" />
          <Todo text="Task 1 masak nasi goreng di rumah" />
        </View>
      </ScrollView>
      <KeyboardAvoidingView>
        <TextInput style={styles.inputText} />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    // backgroundColor: '#e7e6e1',
    backgroundColor: '#f6f6f6',
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
  inputText: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    // backgroundColor: '#161d6f',
    // color: 'white',
  },
});

export default App;
