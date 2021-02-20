import React, { Component } from 'react';
import { PROJECTS } from '../shared/projects';
// import all the components we are going to use
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { Linking } from 'react-native';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProject: PROJECTS[0]
    };
  };
  
  render() {
  console.log(this.state.selectedProject);


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>PORTFOLIO</Text>
      <Card
            title={this.state.selectedProject.name}
            titleStyle={{padding: 2, margin: 0}}
            text={this.state.selectedProject.description}
            containerStyle={styles.card}
            image={this.state.selectedProject.preview}
          >
            <Text style={{textAlign: 'center'}}>{this.state.selectedProject.description}</Text>
            
            <View style={{alignItems: 'center', marginVertical: 10}}>
            <FlatList
              data={this.state.selectedProject.skills}
              extraData={this.state.selectedProject}
              horizontal={true}
              containerStyle={{paddingLeft: 100, justifyContent: 'space-evenly'}}
              renderItem={({item}) => (
                <Button
                  title={item.name}
                  buttonStyle={{margin: 5, backgroundColor: 'orange', paddingVertical: 0}}
                  />    
              )}
              keyExtractor={item => item.id.toString()}
            />
            </View>
            
            
            <Button
              title='VIEW PROJECT'
              onPress={() => Linking.openURL(this.state.selectedProject.link)}
              />
          </Card>
      
      
      <FlatList
        data={PROJECTS}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ flex: 1, flexDirection: 'column' }}
            onPress={() => {this.setState({ selectedProject: item}); console.log(this.state.selectedProject)}}
          >
            <Image style={styles.imageThumbnail} source={item.thumb} />
          </TouchableOpacity>
        )}
        //Setting the number of column
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
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 1,
    backgroundColor: '#322533',
    paddingBottom: 20
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: '98%',
    margin: 1
  },
  card: {
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15,
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