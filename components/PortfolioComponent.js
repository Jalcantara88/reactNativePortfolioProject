import React, { Component } from 'react';
import { PROJECTS } from '../shared/projects';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProject: PROJECTS[0]
    };
  };
  
  render() {
  //console.log(this.state.selectedProject);


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>PORTFOLIO</Text>
      <Card
            title={this.state.selectedProject.name}
            titleStyle={{padding: 0, margin: 0, color: '#2B81BA'}}
            
            text={this.state.selectedProject.description}
            containerStyle={styles.card}
            image={this.state.selectedProject.preview}
            imageStyle={{resizeMode: 'cover', height: 200, margin: 0}}
          >
            <Text style={{textAlign: 'center', margin: 0}}>{this.state.selectedProject.description}</Text>
            
            <View 
              
              style={{alignItems: 'center', marginVertical: 2}}>
            <FlatList
              data={this.state.selectedProject.skills}
              extraData={this.state.selectedProject}
              numColumns={4}
              containerStyle={{ justifyContent: 'space-evenly', padding: 0, marginVertical: 0}}
              renderItem={({item}) => (
                <Animatable.View
                  animation='bounceIn'
                  duration={1000}
                >
                  <Button
                    title={item.name}
                    titleStyle={{fontSize: 12}}
                    buttonStyle={{marginHorizontal: 1, marginVertical: 1, backgroundColor: 'orange', padding: 2}}
                    />  
                </Animatable.View>  
              )}
              keyExtractor={item => item.id.toString()}
            />
            </View>
            
            
            <Button
              title='VIEW PROJECT'
              buttonStyle={{padding: 1, marginVertical: 0, borderRadius: 10}}
              onPress={() => Linking.openURL(this.state.selectedProject.link)}
              />
          </Card>
      
      
      <FlatList
        data={PROJECTS}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ flex: 1, flexDirection: 'column' }}
            onPress={() => {this.setState({ selectedProject: item}); //console.log(this.state.selectedProject)
          }}
          >
            <Animatable.Image 
              animation='flipInY'
              duration={3000}
              style={styles.imageThumbnail} source={item.thumb} />
          </TouchableOpacity>
        )}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
        }
};
export default Portfolio;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 1,
    backgroundColor: '#322533',
    paddingBottom: 20
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    width: '98%',
    margin: 1
  },
  card: {
    
    borderRadius: 15,
    padding: 0,
    
  },
  headerText: {
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#2B81BA',
    padding: 5,
    fontSize: 20,
    color: 'white'
  }
});