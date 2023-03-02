import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function ListComponent(props) {
    return <View style={style.view}>
        <Image
            style={style.image}
            source={{
                uri: props.data.url
            }}

        />
        <Text style={style.title}>{props.data.title}</Text>
        

    </View>
}

const style = StyleSheet.create({
    view: {
        flex:1,
        margin: 5,
        flexDirection:'row',
        padding:10
    },
    title: {
        fontSize: 18,
        margin:10,
        marginRight:100
    },    
    image:{
        height:100,
        width:100
    }

})