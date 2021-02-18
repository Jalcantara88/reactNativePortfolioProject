import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Platform } from 'react-native';
import { Card, Text, Avatar, Image, Button, Icon } from 'react-native-elements';


class Profile extends Component {


    render() {
        return(
            <>
                <View style={styles.nameHolder}>
                    <Text style={styles.name}>JULIO ALCANTARA</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#322533', paddingBottom: 15}}>
                    
                    <Image
                        style={{height: 120, width: 120, paddingLeft: 10}}
                        source={require('../assets/profilePic.png')}
                    />
                    <Card style={{ margin: 0, padding: 0 }}>
                        
                    
                    <Text>LVL 32 ARTIST / CODER</Text>
                    <Text>Designer on a mission to make</Text>
                    <Text style={{marginBottom: 15}}>a living making cool stuff</Text>
                    <Button
                        /*icon={
                            <Icon
                                name='label'
                                type='material'
                                size={25}
                                color='blue'
                            />
                        }*/
                        
                        title='MESSAGE'
                        
                    >
                        CONTACT
                    </Button>
                    </Card>
                    
                    
                </View>

            </>
            
        );
    }
};

const styles = StyleSheet.create({
    nameHolder: {
        backgroundColor: '#2B81BA', 
        padding: 5, 
        alignItems: 'center'
    },
    name: {
        fontSize: 30,
        color: 'white'
    }
})

export default Profile;