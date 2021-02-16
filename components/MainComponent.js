import React, { Component } from 'react';
import SocialBar from './SocialBarComponent';
import Profile from './ProfileComponent';
import Skills from './SkillsComponent';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';


class Main extends Component {

    render() {
        console.log(Skills);
        return (
            <SafeAreaView style={styles.container}>
                <SocialBar />
                <Profile />
                <Skills />
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