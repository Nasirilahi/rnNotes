import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  BackAndroid,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import styles  from './styles';
import { updateNote } from '../../../actions/noteAction';
import ActionButton from 'react-native-action-button';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

class SingleNote extends Component {
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
    super(props)
    const { navigation: { state: { params: {note:{id, title, description }}}}} = this.props;
    this.state = {
      changed: false,
      id: id,
      title: title,
      desc: description,
    }
  }
    updateNote = () => {
        if (this.state.changed) {
        const {navigation: { state: { params: { onGoBack }}, goBack },updateNote}=this.props;
        updateNote({
            id: this.state.id,
            title: this.state.title,
            description: this.state.desc,
            updateAt: new Date()
        })
            onGoBack();
            goBack();
        }
    }
  render() {
    return(
      <View style={ styles.addNotesContainer }>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.inputTitleStyle}
            placeholder='Note Title...'
            placeholderTextColor='#aaa'
            returnKeyType='next'
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ title: text, changed: true })}
            value={this.state.title}
          />

          <TextInput
            style={styles.inputDescriptionStyle}
            multiline={true}
            placeholder='Note Description...'
            placeholderTextColor='#aaa'
            returnKeyType='done'
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({desc: text, changed: true})}
            value={this.state.desc}
          />
        </View>
         <ActionButton
                    buttonColor={'#32cd32'}
                    onPress={this.updateNote}
                    offsetX={20}
                    icon={<Icon name="md-checkmark" size={20} color="white"   />}
        />  
      </View>
    )
  }
}

export default connect(null, { updateNote })(SingleNote)
