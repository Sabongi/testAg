import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
lista:{
    flexDirection: 'row',
    borderWidth: 2,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: 'black',
    marginBottom: 2

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
    alignContent: 'flex-end',
    justifyContent:'flex-end',
    alignSelf: 'flex-end',
    flexDirection: 'row',
},

item:{
    marginLeft: 10,
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center',
}})

export default styles