import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const displayCompatibility = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Percent : {props.percentage}</Text>
            <Text style={styles.text}>Result : {props.result}</Text>
        </View>
    )
}

export default displayCompatibility


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
      fontSize:20,
      textAlign: 'center',
     
    }
  });