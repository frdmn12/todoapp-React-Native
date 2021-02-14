import React, {useState} from 'react';
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
import {Task} from './src/components';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const AddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1); // delete
    setTaskItems(itemsCopy); // nampilin setelah di delete
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
        {/* Main Contain */}
          <Text style={styles.sectionTitle}>Today List</Text>

          {/* Section List */}
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Input Contain */}
      <KeyboardAvoidingView
        // behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Task for today ?'}
          placeholderTextColor="grey"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => AddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 15,
    borderRadius: 30,
    backgroundColor: 'blue',
    color: 'white',
    // borderWidth : 5
  },
  items: {
    marginTop: 25,
    borderRadius : 15,
    backgroundColor : "blue"
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 34,
    width: 250,
  },
  addText: {
    fontSize: 30,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
