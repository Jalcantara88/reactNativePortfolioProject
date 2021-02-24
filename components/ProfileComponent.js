import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

function Profile() {

        return(
            <>
                <View style={styles.nameHolder}>
                    <Animatable.Text 
                        animation='flipInX'
                        duration={3000}
                        style={styles.name}>JULIO ALCANTARA</Animatable.Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', alignContent: 'center', backgroundColor: '#322533', paddingBottom: 15}}>
                    
                    <Animatable.Image
                        animation='slideInLeft'
                        duration={2000}
                        style={{height: 150, width: 150, marginTop: 15}}
                        source={require('../assets/profilePic.png')}
                    />
                    <Animatable.View
                        animation='zoomInUp'
                        duration={2000}
                        >
                    <Card containerStyle={{ borderRadius: 10, marginHorizontal: 0 }}
                        title="LVL 33 ARTIST / CODER"
                        titleStyle={{color: '#2B81BA'}}>
                    <Text>Designer on a mission to make</Text>
                    <Text style={{marginBottom: 15, textAlign: 'center'}}>a living making cool stuff</Text>
                    
                    
                    </Card>
                    </Animatable.View>
                    
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