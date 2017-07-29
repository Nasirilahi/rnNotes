import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const { width , height } = Dimensions.get('window');

const NoteRowItem = ({item:{ title, description, id,createdAt, updateAt }, onNotesEdit, item, onDeleteNote, onViewNote }) =>{

    return(
        <TouchableOpacity style={styles.container} onPress={() => onViewNote(item)}>
           <View style={styles.dataContainer}>
                <View style={styles.titleContainer}>
                     <Text style={styles.titleText}>{`${title}`}</Text>
                     <TouchableOpacity style={styles.deleteButton} onPress={() => onDeleteNote(id) }>
                        <Icon name="md-trash" style={styles.icon} size={16} color="gray" />
                     </TouchableOpacity>
                </View>
               <View style={styles.detailContainer}>
                   <Text style={styles.fielText}>{'Description -'}</Text>
                   <Text style={[styles.amountText,{}]}>  {
                                                            (description.length > 50)
                                                            ? description.slice(0, 50) + '...'
                                                            : description
                                                        }
                    </Text>
               </View>
               <View style={styles.detailContainer}>
                   <Text style={[styles.fielText, {color:'#ff7f50'}]}>{'Created At-'}</Text>
                   <Text style={[styles.amountText,{color:'black'}]}>{moment(createdAt).format("D MMM YYYY h:mA")}</Text>
               </View>
                <View style={styles.detailContainer}>
                   <Text style={[styles.fielText, {color:'#ff7f50'}]}>{'Updated At-'}</Text>
                   <Text style={[styles.amountText,{color:'black'}]}>{moment(createdAt).format("D MMM YYYY h:mA")}</Text>
               </View>
           </View>
        </TouchableOpacity>
    );
};

 const _keyExtractor = (item, index) => index;

const NotesListContainer = ({notes, editNote, onDeleteNote, onViewNote}) => {
    return(
            <FlatList
                data={notes}
                renderItem={({item}) => <NoteRowItem item={item} onNotesEdit={editNote}  onDeleteNote={onDeleteNote} onViewNote={onViewNote}/>} 
                style={styles.listContainer}
                keyExtractor={_keyExtractor}
            />        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:10,
        padding:5,
        borderRadius:3,
        backgroundColor:'white',
        width: width-20,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.60
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    listContainer:{
        marginTop:20,
    },
    dataContainer:{
        flex:1,
    },
    arrowContainer:{
        marginLeft:5,
        justifyContent:'center',
        paddingHorizontal:8,
    },
    detailContainer:{
        flexDirection:'row',
        marginBottom:5,
        flexWrap:'wrap',
        paddingHorizontal:10,
    },
    titleText: {
        fontSize: 18,
        color:'#ffd700',
        marginBottom:5,
        fontWeight:'bold',
    },
    amountText:{
        color:'grey',
    },
    fielText:{
        color :'darkturquoise',
        fontWeight:'bold'
    },
    deleteButton:{
        padding:8,
    },
    dateContainer:{
        flexDirection:'row',
        borderColor:'red',
        borderWidth:1,
    },
});

export default NotesListContainer;