import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Text } from 'react-native-elements';

class Footer extends Component {


    render() {
        return(
            <View>
                <Text style={{textAlign: 'center'}}>BACK TO TOP</Text>
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
            </View>
        );
    }
};

export default Footer;