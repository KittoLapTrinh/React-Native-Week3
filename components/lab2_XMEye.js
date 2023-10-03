import { StyleSheet, Text, View, Image, TextInput  } from 'react-native';
import React from 'react'
import { Button } from 'react-native-web';

export default function lab2_XMEye() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image 
                    style={{
                    
                        height: 110, width: 110, alignSelf:'center', margin: 41, borderRadius: 50 ,  backgroundColor: '#c9e0d0' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Camera_logo_WLM.svg/2014px-Camera_logo_WLM.svg.png',
                    }}
                />
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={styles.center}>
                <View style={styles.center1}>
                    <Image style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'flex-start' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' }}></Image>
                    <TextInput
                        style={{ flex: 1, padding: 20, color:'#c4c4c4' }}
                        placeholder='Please input user name'></TextInput>
                       
                </View>
                <View style={styles.center2}>
                    <View style={{ flex: 1.5, flexDirection: 'row', borderBottomWidth: 2, borderColor: '#black' }}>
                    
                    <Image style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'center' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lock_Icon.svg/768px-Lock_Icon.svg.png' }}></Image>
                    <TextInput
                    style={{ flex: 1, padding:20, height: 53 ,color: '#c4c4c4'}}
                    placeholder='Please input password'></TextInput>
                    </View>    
                </View>
                <View style={{ flex: 0.5 }}></View>
                <View style={styles.center3}>
                    <Button 
                    style={styles.centerButton}
                    color='#386ffc'
                    title='LOGIN'
                   
                    >
                    
                </Button>
                </View>
                <View style={styles.center4}>
                    <Text style={{fontWeight: 'bold', fontSize: 18 }}>Register</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Forgot Password</Text>
                </View>

                
                    
                    
               
                
            </View>

            <View style={styles.bottom}>
                
                <View style={styles.bottom1}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Orther Login Methods </Text>
                  
                    
                </View>
                
                <View style={styles.bottom2}>
                    <Image style={{ height: 80, width: 80, alignSelf: 'center' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/OOjs_UI_icon_userAvatar-progressive.svg/1200px-OOjs_UI_icon_userAvatar-progressive.svg.png' }}></Image>
                    <Image style={{ height: 80, width: 80, alignSelf: 'center' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/159/159599.png' }}></Image>
                    <Image style={{ height: 80, width: 80, alignSelf: 'center' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png' }}></Image>
            
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    top:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60
    },
    center:{
        flex:3,
    },
   
    center1:{
     
        flexDirection: 'row',
        
    },
    center2:{
        flex:1,
     
    },
    center3:{
        flex:1,
        
        marginHorizontal: 25,
        
    },
    centerButton:{
        flex: 1,
        paddingHorizontal: 20,
        
       
    },
    center4:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    bottom:{
        flex:1,
        padding: 'auto',
        margin: 'auto'
    },
    bottom1: {
        flex:1,
        alignItems: 'center'
    
     
    },
    bottom2: {
        flex:1,
        flexDirection: 'row',
      
    }
    

    

    

   

    



});