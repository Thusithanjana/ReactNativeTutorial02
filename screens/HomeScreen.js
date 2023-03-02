import React from "react";
import {StyleSheet, Button, View, Text} from 'react-native';
import {styles} from '../Styles.js';
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

