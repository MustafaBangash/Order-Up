import React from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';

import colors from '../config/colors';

function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
            <Button
                    title="Back"
                    color="white"
                    onPress={() => navigation.navigate("WelcomeScreen")}
            ></Button>
            </View>
            <View style={styles.deleteIcon}></View>
        </View>
    );
}
const styles = StyleSheet.create({
    closeIcon:{
        width: 70,
        height: 70,
        backgroundColor: "red",
        position: "absolute",
        top: 40,
        left: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    container:{
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon:{
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
    image:{
        width: "100%",
        height: "100%"
    },
})

export default LoginScreen;