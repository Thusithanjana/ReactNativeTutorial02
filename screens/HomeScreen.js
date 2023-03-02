import React from "react";
import {StyleSheet, Button, View, Text} from 'react-native';


export default function HomeScreen({navigation}){

    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
            title="Go to Display"
            onPress={()=> navigation.navigate('Display')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });