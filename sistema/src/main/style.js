import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F4E4F',
        // padding: 8,
        width: '100%',
    },
    
    header: {
        flexDirection: 'row',
        backgroundColor: '#A27B5C',
        width: '100%',
        padding: 27,
        justifyContent: 'flex-start',  
    },

    principal: {
        color: '#D6D5A8',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 0,
        marginRight: 30
    },
    cadastro: {
        color: '#D6D5A8',
        fontSize: 23,
        alignSelf: 'center',
        marginLeft: 15,
        marginRight: 15        
    },

    flat: {
        marginTop: 10,
        marginBottom:3.2,
        borderRadius: 5
    },

    box:{
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        width: '60%',
        height: '70%',
        marginTop: '2%',
        borderRadius: 20

    },

    lista:{
        flexDirection: 'row',
        borderWidth: 2,
        borderTopColor: 'white',
        borderRightColor: 'white',
        borderLeftColor: 'white',
        borderBottomColor: 'black',

    },

    botao:{
        width: '40px', 
        height: '40px', 
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 3,
        borderRadius: 10,
        marginLeft: 10
    },

    icon: {
        marginBottom: '3%',
        height: '32px',
        width: '32px',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'

    },

    botoes: {
        flex: 2,
        alignContent: 'center',
        justifyContent:'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },

    item:{
        marginLeft: 10,
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center'
    },

    busca:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%',
        marginTop: 10,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 20,
        padding: 5
    },

})

export default styles