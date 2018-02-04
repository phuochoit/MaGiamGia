import React, { Component } from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
export default class Splash extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/images/logo.png')} style={{width: 500, height: 250, resizeMode: 'contain'}}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white'
    }
})