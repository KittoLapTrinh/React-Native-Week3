import { StyleSheet, Text, View, Image, TextInput, CheckBox } from 'react-native';
import React from 'react'
import { Button,RadioButton } from 'react-native-web';
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function lab1_e() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontSize: 35, fontWeight: 'bold', fontFamily: 'sans-serif', alignItems: 'center' }}>REGISTER</Text>
            </View>
            <View style={styles.center}>           
                    <View style={styles.center1}>
                        <TextInput
                        style={{backgroundColor:'#c9e0d0', padding:15}}
                        placeholder='Name'></TextInput>
                        
                    </View>
                    <View style={styles.center2}>
                        <TextInput
                        style={{backgroundColor:'#c9e0d0', padding:15,  }}
                        placeholder='Phone'></TextInput>
                        
                    </View>
                    <View style={styles.center3}>
                        <TextInput
                        style={{backgroundColor:'#c9e0d0', padding:15, }}
                        placeholder='Email'></TextInput>
                        
                    </View>
                    <View style={styles.center4}>
                        <TextInput
                        style={{ flex: 5,backgroundColor: '#c9e0d0', padding: 15,}}
                        placeholder='Password'></TextInput>
                        
                        <Image 
                        style={{
                            height: 48, width: 48, alignSelf:'flex-end', borderRadius: 5, margin: 23,   backgroundColor: '#c9e0d0' }} source={{ uri: 'https://static.thenounproject.com/png/4830332-200.png',
                        }}
                        />
                        
                    </View>
                    <View style={styles.center5}>
                        <TextInput
                        style={{backgroundColor:'#c9e0d0', padding:15, }}
                        placeholder='Birthday'></TextInput>
                   
                    </View>
                    <View style={styles.center6}>
                        <TouchableOpacity style={{ alignContent: "flex-start" }}>
                            <View style={styles.radioWrapper1}>
                                <View style={styles.radio}></View>
                                <Text style={styles.radioText}>Male</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.radioWrapper2}>
                                <View style={styles.radio}></View>
                                <Text style={styles.radioText}>Female</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
            </View>

            <View style={styles.bottom}>
                <View style={styles.bottom1}>
                    <Button style={{ flex: 1 }}color='#c34e3b'title='REGISTER'></Button>
                </View>
                <View style={styles.bottom2}>
                    <Text style={{ flex: 1, fontWeight: 'bold', textAlign:'center'}}>When you agree to terns and condition</Text>  
                </View>
                
                <View style={{ flex: 1 }}></View>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8efde',
    },
    top:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    center:{
        flex:6,
    },
    center1:{
        flex:1,
        display: 'flex',
        marginHorizontal: 10,
        
    },
    center2:{
        flex:1,
        marginHorizontal: 10
    },
    center3:{
        flex:1,
        marginHorizontal: 10
    },
    center4:{
        flex:1,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        
      
    },
    center5:{
        flex:1,
        marginHorizontal: 10
    },
    center6:{
        flex:1,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: 20,
    },
    bottom:{
        flex: 2,
       
    },
    bottom1:{
        marginHorizontal: 10
    }
    ,
    bottom2:{
        paddingTop: 5
       
    },
    radioWrapper1: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 20
    },
    radioWrapper2: {
        flexDirection: "row",
        alignItems: "center",
    },
    radio: {
        height: 30,
        width: 30,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 30,
        marginLeft: 30,
    },
    radioWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    


    


    



});