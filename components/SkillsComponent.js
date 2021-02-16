import React, { Component } from 'react';
import { View, Platform, Image, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { SKILLS } from '../shared/skills';



function Skills() {

    const webSkills = SKILLS.filter(skill => skill.type === 'web');
    const artSkills = SKILLS.filter(skill => skill.type === 'art');
    const videoSkills = SKILLS.filter(skill => skill.type === 'video');
    const threedeeSkills = SKILLS.filter(skill => skill.type === 'threedee');
/*
    const web = webSkills.map(skill => {
        return(
            <React.Fragment key={skill.id}>
                <RenderBadge item={skill} />
            </ React.Fragment>
        );
    });

    const art = artSkills.map(skill => {
        return(
            <React.Fragment>
                <RenderBadge item={skill} />
            </React.Fragment>
        );
    });

    const video = videoSkills.map(skill => {
        return(
            <React.Fragment>
                <RenderBadge item={skill} />
            </React.Fragment>
        );
    });

    const threedee = threedeeSkill.map(skill => {
        return(
            <React.Fragment>
                <RenderBadge item={skill} />
            </React.Fragment>
        )
    });
*/
function RenderBadge({item}) {
    console.log(item);
    return(
        <TouchableOpacity
                onPress={() => Alert.alert("skill pressed")}
        >
            <Image style={styles.skillBadge} source={item.image}/> 

        </TouchableOpacity>
       
    );
};
    
    
        return(
            <View>
                <Text style={styles.text}>SKILLS</Text>
                
                
                <Text style={styles.text}>WEB</Text>

                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={webSkills}
                    renderItem={RenderBadge}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                />

                <Text style={styles.text}>ART</Text>

                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={artSkills}
                    renderItem={RenderBadge}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                />

                <Text style={styles.text}>VIDEO</Text>

                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={videoSkills}
                    renderItem={RenderBadge}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                />

                <Text style={styles.text}>THREEDEE</Text>

                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={threedeeSkills}
                    renderItem={RenderBadge}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                />
            </View>
        );
    
};

const styles = StyleSheet.create({
    flatlist: {
        
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    skillBadge: {
        height: 60,
        width: 60,
        margin: 5,
        resizeMode: 'contain'
    },
    text: {
        textAlign: 'center'
    }
});


export default Skills;