import React, { Component } from 'react';
import SocialBar from './SocialBarComponent';
import Profile from './ProfileComponent';
import Skills from './SkillsComponent';
import ProjectInfo from './ProjectInfoComponent';
import Portfolio from './PortfolioComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';

import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';


const MainNavigator = createStackNavigator(
    {
        SocialBar: { screen: SocialBar },
        Profile: { screen: Profile },
        Skills: { screen: Skills },
        ProjectInfo: { screen: ProjectInfo },
        Portfolio: { screen: Portfolio },
        Contact: { screen: Contact },
        Footer: { screen: Footer }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    render() {
        return (
        <View
            style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
            
            <AppNavigator />
        </View>
        );
    }
};

export default Main; 