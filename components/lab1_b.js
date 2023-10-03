import { StyleSheet, Text, View, Image,  } from 'react-native';
import React from 'react'
import { Button } from 'react-native-web';

export default function lab1_b() {
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
                    uri: "https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png",
                }}
                />
            </View>
            <View style={styles.center}>
                <Text style={styles.centerText1}>FORGET</Text>
                <Text style={styles.centerText2}>PASWORD</Text>
                <Text style={styles.centerText3}>provide your account's email for which you</Text>
                <Text style={styles.centerText4}>want to reset your password</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottom1}>
                    <Image
                    style={{width: 20,
                        height: 20,
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png",
                    }}
                    /> 
                    {/* <Text style={{ justifyContent: 'center', fontWeight: 'bold' }}>Gmail</Text> */}
                    <Text style={styles.GmailText} >Gmail :</Text>
                   
                </View>
                
                <View style={styles.bottom2}>
                    <Button  title='NEXT' color="#ffa500"></Button>
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
        fontWeight: 'bold',
     
        
        
        
    },
    centerText2:{
        fontSize: 25,
        fontWeight:'bold',
        fontFamily:'sans-serif',
        paddingBottom: 40,
    },
    centerText3:{
        fontSize: 13,
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
    

   

    



});