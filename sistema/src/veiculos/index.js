import {React, useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, } from 'react-native';

import styles from './styles'
import api from '../connection/api'

export default function Veiculos({navigation}) {

    async function cadastraVeiculo() {  
        let logou = false;
        try {
          let dadosUsu = {
            placa, 
            marca,
            veiculo,
            oleo
          };
          
          const response = await api.post('/veiculosCad', dadosUsu);
          logou = response.data.confirma; 
        } catch (err) {
            console.log('Erro: ' + err);
        }
    
        if (logou) {
          alert('Veículo cadastrado com suceso');
        } else {
          alert('Falha no cadastro');
        }
        
    }

    const [placa, setPlaca]= useState(''); 
    const [marca, setMarca]= useState(''); 
    const [veiculo, setVeiculo]= useState(''); 
    const [oleo, setOleo]= useState(''); 

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
                  <Text style={styles.titulo}>Cadastrar Veículo</Text>
                  <TextInput style={styles.input} placeholder='Placa'
                      autoCorrect={false}
                      onChangeText={(pl) => setPlaca(pl)}
                  />
                  <TextInput style={styles.input} placeholder='Marca'
                      autoCorrect={false}
                      onChangeText={(mc) => setMarca(mc)}
                  />
                  <TextInput style={styles.input} placeholder='Veículo'
                      autoCorrect={false}
                      onChangeText={(vl) => setVeiculo(vl)}
                  />
                  <TextInput style={styles.input} placeholder='Óleo Km'
                      autoCorrect={false}
                      onChangeText={(ol) => setOleo(ol)}
                      keyboardType= 'numeric'
                  />
                  <TouchableOpacity style={styles.btnSubmit} onPress={() => cadastraVeiculo()}>
                      <Text style={styles.txtSubmit}>Cadastrar</Text>
                  </TouchableOpacity>
                </View> 

            </View>
   </View>
  );
}