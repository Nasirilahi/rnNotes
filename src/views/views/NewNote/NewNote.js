import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  BackAndroid,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { addNote } from '../../../actions/noteAction';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { bindActionCreators } from 'redux';

class NewNote extends Component {
    static navigationOptions =({navigation}) => ({
        title: 'New Note',
        headerTintColor: 'white',
        headerStyle:styles.headerStyle,
        headerLeft:  <TouchableOpacity style={styles.leftButton} onPress={() =>{
                        const { state: { params: { onGoBack }}, goBack} = navigation;
                         onGoBack();
                         goBack();
                     }}>
                         <Icon name="md-arrow-back" size={20} color="white" />
                     </TouchableOpacity>
    });

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: ''
        }
    }

    addNote = () => {
     const {navigation: { state: { params: { onGoBack }}, goBack },addNote}=this.props;
        addNote({
            title: this.state.title,
            description: this.state.desc,
            createdAt: new Date(),
            updateAt:new Date(),
        });
        onGoBack();
        goBack();
    }

    render() {
        return (
            <View style={ styles.addNotesContainer }>
                <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.inputTitleStyle}
                    autoFocus={true}
                    placeholder='Note Title...'
                    placeholderTextColor='#aaa'
                    returnKeyType='next'
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({ title: text })}
                    value={this.state.title}
                />

                <TextInput
                    style={styles.inputDescriptionStyle}
                    multiline={true}
                    placeholder='Note Description...'
                    placeholderTextColor='#aaa'
                    returnKeyType='done'
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({desc: text})}
                    value={this.state.desc}
                />
                </View>
                <ActionButton
                    buttonColor={'#32cd32'}
                    onPress={this.addNote}
                    offsetX={20}
                    icon={<Icon name="md-checkmark" size={20} color="white"   />}
                />  
            </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    addNote: bindActionCreators( addNote, dispatch )
})

export default connect(null, mapDispatchToProps)(NewNote)
