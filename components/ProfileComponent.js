import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Card, Text, Avatar, Image, Button, Icon } from 'react-native-elements';

class Profile extends Component {


    render() {
        return(
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3CB3EC', paddingBottom: 15}}>
                <Image
                    style={{height: 120, width: 120, paddingLeft: 10}}
                    source={require('../assets/profilePic.png')}
                />
                <Card style={{flex: 2, margin: 0, }}>
                <Text>Julio Alcantara</Text>
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
                    
                    title='CONTACT'
                    
                >
                    CONTACT
                </Button>
                </Card>
                
                
            </View>
        );
    }
};

export default Profile;