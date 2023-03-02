import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {useState, useEffect} from 'react';


export default function App() {

  const [result, setResult] = useState(null)

 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => setResult(data))
    .catch(error => console.error(error))

  },[]);
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {result ? (
        <Text>{JSON.stringify(result[0])}</Text>
      ) : (
        <Text>Loading data...</Text>
      )}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
