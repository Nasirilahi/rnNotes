import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  allNotesContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 56
  },
  emptyList: {
    fontSize: 16
  },

  addNotesContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  textInputContainer: {
    flex: 1
  },
  inputTitleStyle: {
    height: 60,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    fontSize: 20
  },
  inputDescriptionStyle: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    textAlignVertical: 'top',
  },
   headerStyle:{
        backgroundColor:'#6495ed'
    },
    leftButton:{
      padding:10,
    },
});

export default styles;