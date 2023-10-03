import { StyleSheet, Text, View, Image, TextInput  } from 'react-native';
import React from 'react'
import { Button } from 'react-native-web';

export default function lab1() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image
                style={{
                    width: 150,
                    height: 150,
                    resizeMode: 'contain',
                }}
                source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/105/105152.png",
                }}
                />
            </View>
            <View style={styles.center}>
                <Text style={styles.centerText1}>GROW</Text>
                <Text style={styles.centerText2}>YOUR BUSINESS</Text>
                <Text style={styles.centerText3}>We will help you to grow your business using</Text>
                <Text style={styles.centerText4}>online server</Text>
            </View>
            <View style={styles.bottom}>
                {/* <Text style={styles.bottomTextRight}>
                    SIGN UP
                </Text>
                <Text style={styles.bottomTextLeft}>
                    LOGIN
                </Text> */}
                <View style={styles.button}>
                    <Button  title='LOGIN'  color="#ffa500"></Button>
                    <Button  title='SIGN UP' color="#ffa500"></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00ccf9',
    },
    top:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60
    },
    
    center:{
        flex: 1,
        
        alignItems:'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    centerText1:{
        fontSize: 25,
        fontWeight:'bold',
        fontFamily:'sans-serif',
        
    },
    centerText2:{
        fontSize: 25,
        fontWeight:'bold',
        fontFamily:'sans-serif',
        paddingBottom: 80,
    },
    centerText3:{
        fontSize: 13,
        fontWeight: 'bold', 
        fontFamily: 'sans-serif' 

    },
    centerText4:{
        fontSize: 13,
        fontWeight: 'bold', 
        fontFamily: 'sans-serif',
        paddingBottom: 100,

    },
    bottom:{
        flex:1
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 40,
        borderRadius: 50
    },
   

   

    



});