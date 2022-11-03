import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Task from "./src/Task";

export default function App(){

  const [task, setTask] = useState('');
  const [list, setList] = useState([
    {
      key: '1',
      item: 'Study React Native'
    },
    {
      key: '2',
      item: 'Do apps'
    }
  ])

  function handleAddTask(){
    alert(task);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>To do List</Text>

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite uma nova tarefa..."
          style={styles.input}
          value={task}
          onChangeText={e => setTask(e)}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
          <FontAwesome name="plus" size={20} color='#a147'/>
        </TouchableOpacity>
      </View>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <Task data={item}/>}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1313',
    paddingTop: 28
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a147',
    marginTop: '5%',
    paddingLeft: '5%',
    marginBottom: 12
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22
  },
  input: {
    width: '75%',
    backgroundColor: '#DFCCCC',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8
  },
  buttonAdd: {
    width: '15%',
    height: 44,
    backgroundColor: '#cead',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  list: {
    flex: 1,
    backgroundColor: '#dfcccc',
    paddingStart: '5%',
    paddingEnd: '5%'
  }
});