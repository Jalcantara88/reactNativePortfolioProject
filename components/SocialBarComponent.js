import React, { Component } from 'react';
import { SOCIAL } from '../shared/social';
import { Card, ListItem, Text } from 'react-native-elements';
import { FlatList } from 'react-native';



class SocialBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            social: SOCIAL
        };
    }

    static navigationOptions = {
        title: 'SocialBar'
    }

    render() {

        const { navigate } = this.props.navigation;

        const renderSocialItem = ({item}) => {
            return (
                <View>
                    <Image 
                        source={item.image}
                    />
                </View>
            );
        };
        return(
            <FlatList
                data={this.state.projects}
                renderItem={renderSocialItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
};

export default SocialBar;