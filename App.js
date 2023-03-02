import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {useState, useEffect} from 'react';
import ListComponent from './components/ListComponent';

export default function App() {
  const [result, setResult] = useState(null)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => setResult(data))
    .catch(error => console.error(error))

  },[]);
  
  return (
    <View style={styles.container}>
      <ScrollView>       
        {result ?  (
          result.slice(0,20).map((item,index)=>
            (<ListComponent key={index} data={item}/>)            
          )                  
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
