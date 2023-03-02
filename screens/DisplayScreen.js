import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import {styles} from '../Styles.js';


export default function DisplayScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Text>Display Screen</Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />

        </View>
    )
}

