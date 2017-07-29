import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import styles from '../styles';

const HomeEmptyView  = () => {
  return(
      <View style={styles.homeEmptyView}>
          <View style={styles.notesView}>
             <View style={styles.imageCircularView}>
                 <Image style={styles.notesImage} source={require('../../../../assets/images/records/records.png')} />
             </View>
          </View>
          <View style={styles.textView}>
              <Text style={styles.textEmpty}>{'No note in the list. Add new Note'}</Text>
          </View>
          <View style={styles.arrowView}>
              <Image style={styles.arrowImage} source={require('../../../../assets/images/arrow/arrow.png')} />
          </View>
      </View>
  );
};

export default HomeEmptyView;