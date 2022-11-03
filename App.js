import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function App(){

  return(
    <View style={styles.container}>
      <Text style={styles.title}>To do List</Text>

      <View style={styles.containerInput}>
        <TextInput placeholder="Digite uma nova tarefa..." style={styles.input}/>

        <TouchableOpacity style={styles.buttonAdd}>
          <FontAwesome name="plus" size={20} color='#a147'/>
        </TouchableOpacity>
      </View>
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
  }
});