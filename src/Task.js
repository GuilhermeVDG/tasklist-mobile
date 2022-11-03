import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


export default function Task({ data }){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="trash" size={20} color='#a147'/>
      </TouchableOpacity>
      
      <Text style={styles.text}>{data.item}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1313',
    marginTop: 12,
    padding: 12,
    borderRadius: 4,
    flexDirection: 'row'
  },
  button: {
    marginRight: 8
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  }
})