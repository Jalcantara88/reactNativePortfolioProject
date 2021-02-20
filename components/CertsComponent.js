import React from 'react';
import { View, Platform, Image, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { CERTS } from '../shared/certs';



function Certs() {

   
function RenderCert({item}) {
    console.log(item);
    return(
        <TouchableOpacity
                onPress={() => {
                    
                    Alert.alert(`${item.name} \nfrom: ${item.issuedBy}`)}}
        >
            <Image style={styles.cert} source={item.image}/> 

        </TouchableOpacity>
       
    );
};
    
    
        return(
            <View style={{paddingBottom: 20}}>
                <Text style={styles.headerText}>Certifications</Text>
                
                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={CERTS}
                    renderItem={RenderCert}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                />

                
            </View>
        );
    
};

const styles = StyleSheet.create({
    flatlist: {
        
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        textAlign: 'center'
    },
    headerText: {
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#BA2B37',
        padding: 5,
        fontSize: 20,
        marginBottom: 10,
        color: 'white'
    },
    cert: {
        height: 100,
        width: 120,
        resizeMode: 'stretch'
    }
});


export default Certs;