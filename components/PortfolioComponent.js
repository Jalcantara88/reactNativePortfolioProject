import React, { useState } from 'react';
import { PROJECTS } from '../shared/projects';
// import all the components we are going to use
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const Portfolio = () => {
  var selectedProject = PROJECTS[0];
  console.log(selectedProject);

  const handleSelect = () => {
    console.log(selectedProject);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>PORTFOLIO</Text>
      <Card
        title={selectedProject.name}
        text={selectedProject.description}
        containerStyle={styles.card}
      >
        <Image source={selectedProject.preview} style={styles.cardImage}/>
      </Card>
      <FlatList
        data={PROJECTS}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ flex: 1, flexDirection: 'column' }}
            onPress={() => {selectedProject: item; console.log(item)}}
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
};
export default Portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 1,
    backgroundColor: '#86438A',
    paddingBottom: 20
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: '98%',
    margin: 1
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch'
  },
  card: {
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15
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