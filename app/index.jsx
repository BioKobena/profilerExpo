import { StyleSheet, Text, View, Button } from 'react-native'
import { Link } from 'expo-router'
import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';

const index = () => {
    const animation = useRef(null);

    useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        // animation.current?.play();
    }, []);


    return (
        <View style={styles.animationContainer}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: '100%',
                    height: '70%',
                    // backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../assets/animate.json')}
            />
            <View style={styles.buttonContainer}>

                <Link href="menu">
                    <View style={styles.linkBtn}>
                        <Text style={styles.text}>Menu</Text>
                    </View>
                </Link>
                {/* <Button
                    title="Restart Animation"
                    onPress={() => {
                        animation.current?.reset();
                        animation.current?.play();
                    }}
                /> */}
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
    linkBtn: {
        width: 150,
        height: 40,
        backgroundColor: '#0a7ea4',
        padding: 5,
        borderRadius: 5,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "500",
        fontFamily:"SpaceMono"
    }
});