import React, { Component } from 'react';
import { SOCIAL } from '../shared/social';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import * as Animatable from 'react-native-animatable';



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
                    <Animatable.Image 
                    animation='fadeInRightBig'
                    duration={2000}
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
        backgroundColor: '#86438A',
        height: 45,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    socialIcon: {
        height: 30,
        width: 30,
    },
});

export default SocialBar;