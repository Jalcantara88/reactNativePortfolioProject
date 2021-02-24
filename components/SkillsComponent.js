import React, { Component } from 'react';
import { View, Platform, Image, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { Card, AirbnbRating } from 'react-native-elements';
import { SKILLS } from '../shared/skills';
import * as Animatable from 'react-native-animatable';



class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            webSkills : SKILLS.filter(skill => skill.type === 'web'),
            artSkills : SKILLS.filter(skill => skill.type === 'art'),
            videoSkills : SKILLS.filter(skill => skill.type === 'video'),
            threedeeSkills : SKILLS.filter(skill => skill.type === 'threedee'),
            modalVisible: false,
            selectedSkill: SKILLS[0]
        }
    }
    

    RenderBadge = ({item}) => {
        //console.log(item);

        return(
            <TouchableOpacity
                    onPress={() => {
                        
                        this.setState({modalVisible: !this.state.modalVisible})
                        this.setState({selectedSkill: item})
                    }}
            >
                <Animatable.Image 
                    animation='flipInX'
                    duration={4000}
                    easing='ease-in-out'
                    style={styles.skillBadge} 
                    source={item.image}/> 

            </TouchableOpacity>
        
        );
    };
    
    render(){
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
                            containerStyle={styles.ratingView}
                            title={this.state.selectedSkill.skillName}
                            titleStyle={styles.ratingTitle}    
                        >
                            <AirbnbRating
                                count={5}
                                reviews={["Beginner", "Intermediate", "Advanced", "Expert", "GodLike"]}
                                defaultRating={this.state.selectedSkill.level}
                                size={20}
                            />

                            <TouchableOpacity
                                style={styles.modalClose} 
                                onPress = {() => {
                                this.setState({modalVisible: !this.state.modalVisible})}}>
                                
                                <Text style={{textAlign: 'center'}}>Close</Text>
                            </TouchableOpacity>
                        </Card>
                        
                    </Animatable.View>
                </Modal>

                <Text style={styles.headerText}>SKILLS</Text>
                
                
                <Text style={styles.text}>WEB</Text>

                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={this.state.webSkills}
                    renderItem={this.RenderBadge}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                />

                <Text style={styles.text}>ART</Text>

                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={this.state.artSkills}
                    renderItem={this.RenderBadge}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                />

                <Text style={styles.text}>VIDEO</Text>

                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={this.state.videoSkills}
                    renderItem={this.RenderBadge}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                />

                <Text style={styles.text}>THREEDEE</Text>

                <FlatList
                    contentContainerStyle={styles.flatlist}
                    data={this.state.threedeeSkills}
                    renderItem={this.RenderBadge}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                />
            </View>
        );
    }
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
    modal: {
        flex: 1,
        alignItems: 'center',
        opacity: 100,
        paddingTop: 100,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    ratingTitle: {
        fontSize: 30,
        color: 'white'
    },
    modalClose: {
        borderRadius: 10,
        
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 50
    },
    skillLevel: {
        fontSize: 15,
    },
    ratingView: {
        backgroundColor: '#3D3140',
        borderColor: '#3D3140',
        borderRadius: 10,
        
    }
});


export default Skills;