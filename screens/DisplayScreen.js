import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});