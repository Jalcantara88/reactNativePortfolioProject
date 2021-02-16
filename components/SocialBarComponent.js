import React, { Component } from 'react';
import { SOCIAL } from '../shared/social';
//import { Image } from 'react-native-elements';
import { FlatList, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Linking } from 'react-native';
import { StatusBar } from 'react-native';



class SocialBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            social: SOCIAL
        }
    }

    render() {

        const renderSocialLink = ({item}) => (
            <>
            
            <TouchableOpacity
                onPress={() => Linking.openURL(item.url)}
            >
                <Image 
                    style={styles.socialIcon} 
                    source={item.image}
                    
                />
            </TouchableOpacity>
            
    
            
            </>
        );
            
        
    
            
        
            
            return(
                
                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={this.state.social}
                    renderItem={renderSocialLink}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                />
                
                
              
            );

    }
    
    
};

const styles = StyleSheet.create({
    flatlist: {
        backgroundColor: '#683CEC',
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialIcon: {
        height: 50,
        width: 50,
        margin: 3
    },
});

export default SocialBar;