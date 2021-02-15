import React, { Component } from 'react';
import SocialBar from './SocialBarComponent';
import Profile from './ProfileComponent';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';


class Main extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SocialBar />
                <Profile />
            </ SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        marginRight: 0,
        padding: 0,
    }
});

export default Main; 