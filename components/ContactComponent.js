import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { Card, Text, Input, CheckBox } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';



class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            canContact: false
        };
    }

    sendMail() {
        console.log(this.state);
        MailComposer.composeAsync({
            recipients: ['julio@deadheadstudio.com'],
            subject: `Site Message from : ${this.state.name}`,
            body: `message: ${this.state.message} \ncontact:${this.state.canContact.toString()} \nemail: ${this.state.email}`
        });
    }

    render() {
        return(
            <>
            <View style={{width: '100%', backgroundColor: 'orange', padding: 5}}>
                <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>CONTACT</Text>
            </View>
            <View style={{backgroundColor: '#322533', paddingVertical: 10}}>
                <Card style={styles.container}>
                    
                    <Input
                        placeholder='Name'
                        placeholderTextColor='orange'
                        leftIcon={{type: 'font-awesome', name: 'user', color: 'orange'}}
                        onChangeText={name => this.setState({name})}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />

                    <Input
                        placeholder='Email'
                        placeholderTextColor='orange'
                        leftIcon={{type: 'font-awesome', name: 'envelope', color: 'orange'}}
                        onChangeText={email => this.setState({email})}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />

                    <TextInput
                        placeholder='Message'
                        placeholderTextColor='orange'
                        allowFontScaling={true}
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={message => this.setState({message})}
                        style={styles.formTextInput}
                        underlineColorAndroid='grey'
                        
                    />

                    <CheckBox
                        title='May I Contact You'
                        center
                        checked={this.state.canContact}
                        onPress={() => this.setState({canContact: !this.state.canContact})}
                        containerStyle={styles.formCheckbox}
                    />

                    <Button
                        onPress={() => this.sendMail()}
                        title='Submit'
                        color='orange'
                    />
                </Card>
            </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    formInput: {
        padding: 10
    }, 
    formTextInput: {
        padding: 10,
        height: 60
        
    },
    container: {
        justifyContent: 'center',
        margin: 20,
        backgroundColor: 'grey'
    },
    formIcon: {
        marginRight: 10
    }
})

export default Contact;