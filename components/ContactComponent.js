import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { Card, Text, Input, CheckBox } from 'react-native-elements';

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

    handleSubmit() {
        console.log(this.state);
    }

    render() {
        return(
            <View style={{backgroundColor: '#fff'}}>
                <Card style={styles.container}>
                    <Text style={{textAlign: 'center'}}>MESSAGE ME</Text>
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
                        onPress={() => this.handleSubmit()}
                        title='Submit'
                        color='orange'
                    />
                </Card>
            </View>
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
        margin: 20
    },
    formIcon: {
        marginRight: 10
    }
})

export default Contact;