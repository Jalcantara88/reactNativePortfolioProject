import React, { Component, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { View, Platform, ScrollView } from 'react-native';
import { Card, Text, Avatar, Image, Button, Icon } from 'react-native-elements';


function Profile() {

    const scrollRef = useRef();
  
    const scrollContact = () => {
            scrollRef.current.ScrollTo({
            y: 500,
            animated: true,})
            return(
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
                        onPress={scrollContact}
                    >
                        CONTACT
                    </Button>
            );
            
            };

    

        

        return(
            <>
                <View style={styles.nameHolder}>
                    <Text style={styles.name}>JULIO ALCANTARA</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', alignContent: 'center', backgroundColor: '#322533', paddingBottom: 15}}>
                    
                    <Image
                        style={{height: 150, width: 150, marginTop: 15}}
                        source={require('../assets/profilePic.png')}
                    />
                    <Card containerStyle={{ borderRadius: 10, marginHorizontal: 0 }}
                        title="LVL 33 ARTIST / CODER"
                        titleStyle={{color: '#2B81BA'}}>
                    <Text>Designer on a mission to make</Text>
                    <Text style={{marginBottom: 15, textAlign: 'center'}}>a living making cool stuff</Text>
                    
                    
                    </Card>
                    
                    
                </View>

            </>
            
        );
    
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