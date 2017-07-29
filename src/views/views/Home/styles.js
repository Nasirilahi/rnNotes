import { StyleSheet, Dimensions, Image, Platform } from 'react-native';

const { width,height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    homeEmptyContainer:{
        flex:1,
        justifyContent:'flex-end',
    },
    homeEmptyView:{
       bottom:40,
    },
    notesView:{
        alignItems:'center',
    },
    textView:{
        marginVertical:15,
        alignItems:'center',
        justifyContent:'center',
    },
    arrowView:{
        alignItems:'flex-end'
    },
    imageCircularView:{
        height:150,
        width:150,
        borderRadius:75,
        backgroundColor:'rgba(180, 180, 180, 0.10)',
        alignItems:'center',
        justifyContent:'center',
    },
    notesImage:{
        flex: 1,
        width: 75,
        height: 75,
        resizeMode: 'contain'
    },
    arrowImage:{
        resizeMode:'contain',
        right:85,
    },
    textEmpty:{
        fontSize: 13,
        color:'rgba(0, 0, 0 ,0.4)',
    },
    headerStyle:{
        backgroundColor:'#6495ed'
    },
});

export default styles;