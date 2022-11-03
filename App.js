import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function App(){
  const [name, setName] = useState('Guilherme');

  function handleChangeName(){
    setName('Vanderley');
  }
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={handleChangeName}>
        <Text style={styles.buttonText}>Mudar nome</Text>
      </TouchableOpacity>
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
    fontSize: 32,
    color: '#121212',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})