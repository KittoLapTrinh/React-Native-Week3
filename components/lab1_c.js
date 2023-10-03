import { StyleSheet, Text, View, Image,  } from 'react-native';
import React from 'react'
import { Button } from 'react-native-web';

export default function lab1_c() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontSize: 60, fontWeight: 'bold', fontFamily: 'sans-serif' }}>CODE</Text>
            </View>
            <View style={styles.center}>
                <View style={styles.center1}>
                    <Text style={styles.centerText1}>VERIFICATION</Text>
                    <Text style={styles.centerText2}>Enter ontime password sent on</Text>
                    <Text style={styles.centerText3}>++849092605798</Text>
                </View>
                <View style={styles.center2}>
                        <View style={styles.center21}></View>
                        <View style={styles.center21}></View>
                        <View style={styles.center21}></View>
                        <View style={styles.center21}></View>
                        <View style={styles.center21}></View>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottom2}>
                    <Button  title='VERTIFY CODE' color="#ffa500"></Button>
                </View>
                
            </View>
            <View style={styles.bottom3}>
                    
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d4f4f6',
    },
    top:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60
    },
    
    center1:{
        flex: 1,
    
        alignItems:'center',
        justifyContent: 'center',
        paddingTop: 100,
        marginBottom: 100

    },
    centerText1:{
        fontSize: 25,
        fontWeight:'bold',
        fontFamily:'sans-serif',
        fontWeight: 'bold',
        marginBottom: 70
     
        
        
        
    },
    centerText2:{
        fontSize: 14,
        fontWeight:'bold',
        fontFamily:'sans-serif',
        paddingBottom: 30,
       
    },
    centerText3:{
        fontSize: 14,
        fontWeight: 'bold', 
        fontFamily: 'sans-serif' ,

        

    },
    centerText4:{
        fontSize: 13,
        fontWeight: 'bold', 
        fontFamily: 'sans-serif',
        paddingBottom: 100,

    },
    bottomTop:{
        flex:1,
        backgroundColor: '#cbbeb5'
    },
    
    bottom:{
        flex: 1,
        paddingHorizontal: 20,
        
        
        
    },
    bottom1:{
        flex: 0.5,
        backgroundColor: '#c4c4c4',
        marginBottom: 20 
        

        
    },
    bottom2:{
        flex: 1,
    
    },
    bottom3:{
        flex: 0.5,
        backgroundColor: '#60ddf7',
        
    },
    center2:{
        flexDirection:'row',
        flex: 1,
        marginLeft: 50,
        marginRight: 50,

    },
    center21:{
        borderWidth: 1,
        flex:1,
        marginBottom: 20,
        

        
    }
    

   

    



});