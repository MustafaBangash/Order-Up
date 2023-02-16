import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/GreenBackground.jpeg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo}source={require("../assets/logo.png")}/>
                <Text>Skip The Wait</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary
    },
    logo: {
        width: 200,
        height: 200,
    },
    logoContainer: {
        position: "absolute",
        top: 100,
        alignItems: "center"
    }
})

export default WelcomeScreen;