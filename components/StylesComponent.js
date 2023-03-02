import React from "react";
import {StyleSheet, Text, View} from 'react-native';


export default function StylesComponent(){

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.boldText}>Hello, world!</Text>
            </View>
            <View style={styles.body}>
                <Text>Lorem ipsum dolor sit amet</Text>
                <Text>Lorem ipsum dolor sit amet</Text>
                <Text>Lorem ipsum dolor sit amet</Text>
                <View style= {styles.row}>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                </View>
                <View style= {styles.row}>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                </View>
                <View style= {styles.row}>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                    <View style={styles.box}/>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff',
            alignItems:'center',
            justifyContent:'center'
        },
        header:{
            backgroundColor:'pink',
            padding:20,
            width:'100%',
            height:'8%',
            marginTop:'6%'
        },
        boldText:{
            fontWeight:'bold'
        },
        body:{
            backgroundColor:'yellow',
            padding:20,
            width:'100%',
            height:'90%'

        },
        row:{
            flexDirection:'row'
        },
        box:{
            height:100,
            width:100,
            backgroundColor:'red',
            margin:10
        }
    }
)