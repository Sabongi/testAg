import {React, useState} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'
import api from '../connection/api'

export default function Motorista({navigation}) {
    async function cadastraMotorista() {  
        let logou = false;
        try {
          let dadosUsu = {
            nome, 
            telefone,
            cnh,
          };
          
          const response = await api.post('/motoristasCad', dadosUsu);
          logou = response.data.confirma; 
        } catch (err) {
            console.log('Erro: ' + err);
        }
    
        if (logou) {
          alert('Motorista cadastrado com suceso');
        } else {
          alert('Falha no cadastro');
        }
        
    }
 
    /* Criando os controladores de estado */
    const [nome, setNome]= useState(''); 
    const [telefone, setTelefone]= useState(''); 
    const [cnh, setCnh]= useState(''); 
   
 return (
   <View style={styles.container}>
    <View style={styles.header}>

      <TouchableOpacity onPress={() => navigation.navigate('Main')}>    
          <Text style={styles.principal}>Principal</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.cadastro} onPress={() => navigation.navigate('Motorista')}>    
          <Text style={styles.cadastro}>Motoristas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cadastro} onPress={() => navigation.navigate('Veiculos')}>    
          <Text style={styles.cadastro}>Veículos</Text>
      </TouchableOpacity> 

    </View>

    
            <View style={styles.cadastrar}>
                <View style={styles.box}>
                  <Text style={styles.titulo}>Cadastrar Motorista</Text>
                  <TextInput style={styles.input} placeholder='Nome'
                      autoCorrect={false}
                      onChangeText={(nm) => setNome(nm)}
                  />
                  <TextInput style={styles.input} placeholder='Telefone'
                      autoCorrect={false}
                      onChangeText={(tl) => setTelefone(tl)}
                  />
                  <TextInput style={styles.input} placeholder='CNH'
                      autoCorrect={false}
                      onChangeText={(cn) => setCnh(cn)}
                  />
                  <TouchableOpacity style={styles.btnSubmit} onPress={() => cadastraMotorista()}>
                      <Text style={styles.txtSubmit}>Cadastrar</Text>
                  </TouchableOpacity>
                </View> 

            </View>
   </View>
  );
}