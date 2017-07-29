import React, { Component } from 'react';
import {
    View,
    StatusBar,
    NetInfo,
    Platform,
    Alert,
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import HomeEmptyView from './NotesComponents/HomeEmptyView';
import ActionButton from 'react-native-action-button';
import { bindActionCreators } from 'redux';
import { deleteNote } from '../../../actions/noteAction';
import NotesListContainer from './NotesComponents/NotesListContainer';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Notes',
        headerTintColor: 'white',
        headerStyle:styles.headerStyle,
    };
    state = {
        push: 0,
    };


    addNote = () => {
        const { push } = this.state;
        if(!push){
            const { navigation: { navigate } } = this.props;
            navigate('NewNote', {  onGoBack: () => this.setState({push: 0})  });
            this.setState({push: 1});
        }
    };

    onDeleteNote = (noteId) => {
            Alert.alert(
            'Delete Note',
            'Do you want to delete this note?',
            [
                { text: 'YES', onPress: () => this.props.deleteNote(noteId) },
                { text: 'No' }
            ]
            )
    }

    onViewNote = (note) => {
        const { push } = this.state;
        if(!push){
            const { navigation: { navigate } } = this.props;
            navigate('ViewNote', {  onGoBack: () => this.setState({push: 0}), note:note });
            this.setState({push: 1});
        }
    }

    render() {
    const { notes } = this.props;
    const customStyle = notes.length ? { alignItems:'center', justifyContent:'center',} : {};
     return(
         <View style={[styles.container, customStyle]}>
             <StatusBar
                 backgroundColor="rgba(55, 52, 71, 0.9)"
                 barStyle="light-content"
             />
             {
                notes.length 
                ? 
                <NotesListContainer 
                    notes={notes}
                    onDeleteNote={this.onDeleteNote}
                    onViewNote={this.onViewNote}
                />   
                :
                <View style={styles.homeEmptyContainer}>
                        <HomeEmptyView />
                </View>  

             }                                    
             <ActionButton
                 buttonColor={'#6495ed'}
                 onPress={() => this.addNote()}
                 offsetX={20}
             />          
         </View>
     );
 }
}

const mapStateToProps = ({notes}) => ({notes});


const mapDispatchToProps = (dispatch) => ({ deleteNote: bindActionCreators(deleteNote, dispatch ) });
   

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
