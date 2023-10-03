import {StyleSheet, Text, View, TextInput, TouchableOpacity,} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function lab2() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.top}>LOGIN</Text>
        </View>
        
        <View style={styles.center}>
          <View style={styles.center1}>
            <FontAwesome5
              style={styles.icon}
              name="user-alt"
              size={24}
              color="black"
            />
            <TextInput style={{ width: "85%" }} placeholder="Name" />
          </View>
  
          <View style={styles.center2}>
            <FontAwesome5
              style={styles.icon}
              name="lock"
              size={24}
              color="black"
            />
            <TextInput placeholder="Password" style={{ width: "75%" }}></TextInput>
            <AntDesign name="eye" size={24} color="black" />
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.login}>
                <Text style={styles.LoginText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.textBottom}>CREATE ACCOUNT</Text>
          </View>
          
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "transparent",
      backgroundImage: "linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)",
    },
    top: {
      flex: 1,
      fontSize: 30,
      fontWeight: "bold",
      paddingTop: 40,
      paddingLeft: 20,
    },
    center: {
      flex: 3,
      paddingTop: 40,
      width: "100%",
      height: 50,
    },
    center1: {
      flexDirection: "row",
      justifyContent: "space-around",
      borderWidth: 1,
      borderColor: "white",
      backgroundColor: "#f0c200",
      marginHorizontal: 20,
      marginVertical: 15,
    },
    center2: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "#f0c200",
        marginHorizontal: 20,
        marginVertical: 15,
      },
    icon: {
      width: 32,
      height: 32,
      justifyContent: "center",
      paddingTop: 2,
    },
    login: {
      backgroundColor: "black",
      marginHorizontal: 20,
      height: 45,
      justifyContent: "center",
      borderRadius: 2,
    },
    LoginText: {
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
    },
    textBottom:{
      paddingTop: 50,
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
    }
  });