

import React, { useState } from "react";

import { Text, TextInput, Button, View } from 'react-native';
import { styles } from './styles';
import { auth } from "../firebaseConfig";
import {createUserWithEmailAndPassword} from 'firebase/auth';


export default function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handeSignUp = () => {
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
       
    }

    const handleLogin = () => {

    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

   
    return (
        <View style={styles.loginForm}>
            <TextInput
                placeholder="Enter Email"
                style={styles.inputText}
                onChangeText={handleEmailChange}
                value={email}
            />
            <TextInput
                placeholder="Enter Password"
                style={styles.inputText}
                secureTextEntry={true}
                onChangeText={handlePasswordChange}
                value={password}
            />
            <View style={styles.buttonSignUp}>
                <Button
                    title="Sign Up"
                    onPress={handeSignUp}
                    style={styles.buttonSignUp}
                    color='#e7b3b3'
                />
            </View>
            <View style={styles.buttonLogin}>
                <Button
                    title="Login"
                    onPress={handleLogin}
                    style={styles.buttonLogin}
                    color='#feb062'
                />
            </View>


        </View>

    );
}