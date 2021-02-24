
import React, { Component } from 'react';
import { View, Platform, Image, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { Card } from 'react-native-elements';
import { CERTS } from '../shared/certs';
import * as Animatable from 'react-native-animatable';



class Certs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCert: CERTS[0],
            modalVisible: false
        };
    }

   
RenderCert = ({item}) => {
    //console.log(item);
    return(
        <TouchableOpacity
                onPress={() => {
                    this.setState({modalVisible: !this.state.modalVisible})
                    this.setState({selectedCert: item})}}
        >
            <Animatable.Image 
                animation='zoomIn'
                duration={2000}
                style={styles.cert} 
                source={item.image}/> 

        </TouchableOpacity>
       
    );
}
    
    render() {
        return(
            <View style={{paddingBottom: 20}}>
                <Modal 
                    animationType = {"fade"} 
                    transparent = {true}
                    visible = {this.state.modalVisible}
                    onRequestClose = {() => { console.log("Modal has been closed.") } }>
                
                    <Animatable.View 
                        animation='pulse'
                        duration={1000}
                        style = {styles.modal}>

                        <Card 
                            containerStyle={styles.certView}
                            titleStyle={styles.certTitle}
                            title={this.state.selectedCert.name}
                            image={this.state.selectedCert.image}
                            imageStyle={{resizeMode: 'cover', height: 300}}   
                        >

                            <Text style={{textAlign: 'center', fontSize: 16, color: 'white'}}>Issued By: {this.state.selectedCert.issuedBy}</Text>

                            <TouchableOpacity
                                style={styles.modalClose} 
                                onPress = {() => {
                                this.setState({modalVisible: !this.state.modalVisible})}}>
                                
                                <Text style={{textAlign: 'center', color: 'white'}}>Close</Text>
                            </TouchableOpacity>
                        </Card>
                        
                    </Animatable.View>
                </Modal>
                <Text style={styles.headerText}>Certifications</Text>
                
                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={CERTS}
                    renderItem={this.RenderCert}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    extraData={this.state.selectedCert}
                />

                
            </View>
        );
    }
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
    },
    modal: {
        width: '100%',
        padding: 0,
        alignItems: 'center',
        opacity: 100,
        paddingTop: 100,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    certFull: {
        width: '100%',
        resizeMode: 'center'
    },
    certView: {
        borderRadius: 20,
        paddingVertical: 15,
        width: '100%',
        borderColor: '#3D3140',
        backgroundColor: '#3D3140'
    },
    modalClose: {
        borderRadius: 10,
        backgroundColor: '#BA2B37',
        padding: 10,
        marginTop: 50
    },
    certTitle: {
        fontSize: 30,
        color: 'white'
    }
});


export default Certs;