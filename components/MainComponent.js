import React, { Component } from 'react';
import SocialBar from './SocialBarComponent';
import Profile from './ProfileComponent';
import Skills from './SkillsComponent';
import Footer from './FooterComponent';
import Portfolio from './PortfolioComponent';
import Contact from './ContactComponent';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'react-native';


class Main extends Component {

    render() {
        console.log(Skills);
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <SocialBar />
                    <Profile />
                    <Skills />

                    <Contact />
                </ScrollView>
                
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