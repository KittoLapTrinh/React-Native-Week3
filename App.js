import { StyleSheet, Text, View, Image, TextInput, ViewBase } from 'react-native';
import React from 'react'
import { Button } from 'react-native-web';



import Lab1 from './components/lab1';
import Lab1_a from './components/lab1_a';
import Lab1_b from './components/lab1_b';
import Lab1_c from './components/lab1_c';
import Lab1_d from './components/lab1_d';
import Lab1_e from './components/lab1_e';
import Lab2 from './components/lab2';
import Lab2_XMEye from './components/lab2_XMEye';

export default function App()  {
    return (
        <View style={styles.container}>
            
            {/* <Lab1/>; */}
            {/* <Lab1_a/>; */}
            {/*<Lab1_b/>;*/}
            {/*<Lab1_c/>; */}
            {/*<Lab1_d/>;*/}
            {/* <Lab1_e/>; */}
            <Lab2/>;
            {/* <Lab2_XMEye/>; */}
  
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        height: "100%",
        width: "100%",
        justifyContent: "center",
  },
        
})
    

    

    

   

    



