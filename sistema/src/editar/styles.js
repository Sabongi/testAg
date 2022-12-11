import React from 'react';
import { StyleSheet } from 'react-native';

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

    cadastrar:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
        
    },

    box:{
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        width: 900,
        height: '95%',
        marginTop: '2%',
        borderRadius: 20

    },

    caixaInput:{
        flexDirection: 'row',


    },

    conjunto1:{
        marginLeft: 10,

        width: 100
    },
    conjunto2:{

        width: 100
    },


 

    titulo:{
        fontSize: 30,
        marginBottom: 10,
        marginLeft: 20
    },

    nomeCampo:{
        marginLeft: 50,
        marginBottom: 10,
        fontSize: 20,
    },

    input: {

        backgroundColor: '#C0C0C0',
        width: 375,
        marginBottom: 30,
        marginLeft: 50,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },

    btnSubmit: {
        width: '90%',
        height: 45,
        backgroundColor: '#A27B5C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        alignSelf: 'center'
    },

    txtSubmit: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default styles