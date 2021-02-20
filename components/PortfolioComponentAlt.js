import React, { Component } from 'react';
import { PROJECTS } from '../shared/projects';
import { View, Platform, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';



class Portfolio extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectedId: '1',
            projects: PROJECTS
        };
    }
    
    

    render() {
        console.log(PROJECTS);
        console.log(this.state.projects);

        const renderProject = ({item}) => {console.log(item);
            <TouchableOpacity style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                
                <Image 
                    style={styles.thumbs}
                    source={item.thumb}
                    placeholderContent={<ActivityIndicator />}
                />
          
            </TouchableOpacity>
        }

        return(
            <>
            <View style={{width: '100%', backgroundColor: '#2B81BA', padding: 5}}>
                <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>PORTFOLIO</Text>
            </View>
            <View style={styles.container}>
                <Card style={{}}>
                    <Text style={{textAlign: 'center', fontSize: 25, marginVertical: 70}}>selected project here</Text>

                </Card>
            </View>
            <View style={styles.container}>    
                <FlatList
                    
                    data={PROJECTS}
                    renderItem={renderProject}
                    numColumns={3}
                    keyExtractor={item => item.id.toString()}
                />

            </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#86438A',
        height: 500,
        paddingVertical: 10,
        flex: 1,
        justifyContent: 'center'
    },
    thumbs: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: 'white'
    },
});

export default Portfolio;