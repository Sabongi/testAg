import {React, useState} from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './styles'
import api from '../connection/api'

export default function Editar({navigation, route}){

  console.log(route.params.item)

    const id = route.params.item.Controle_id
    
  const [dataSaida, setDataSaida] = useState(route.params.item.Data_saida)
  const [horaSaida, setHoraSaida] = useState(route.params.item.Hora_saida)
  const [kmSaida, setKmSaida] = useState(route.params.item.Km_saida)
  const [destino, setDestino] = useState(route.params.item.Destino)
  const [dataRetorno, setDataRetorno] = useState(route.params.item.Data_retorno)
  const [horaRetorno, setHoraRetorno] = useState(route.params.item.Hora_retorno)
  const [kmRetorno, setKmRetorno] = useState(route.params.item.Km_Retorno)

 const item = {dataSaida, horaSaida, kmSaida, destino, dataRetorno, horaRetorno, kmRetorno}


  async function attCorrida() {  
    let alterou = false;
    try {
      let dadosUsu = {
        DataSaida: dataSaida, 
        HoraSaida: horaSaida,
        KmSaida: kmSaida,
        destino: destino,
        DataRetorno: dataRetorno,
        HoraRetorno: horaRetorno,
        KmRetorno: kmRetorno
      };
      
      const response = await api.patch('controle/' + id, dadosUsu);
      alterou = response.data.confirma; 
    } catch (err) {
        console.log('Erro: ' + err);
    }

    if (alterou) {
        navigation.goBack({item});          
    } else {
        alert('Falha na atualização');
    }
    
}

    return(
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
                      <Text style={styles.titulo}>Editar corrida</Text>
                        <View style={styles.caixaInput}>
                                <View styles={styles.conjunto1}>
                                    <Text style={styles.nomeCampo}>Data Saída</Text>
                                    <TextInput style={styles.input} 
                                    value={dataSaida}
                                    onChangeText={ds => setDataSaida(ds)} 
                                    />
                                    <Text style={styles.nomeCampo}>Hora Saída</Text>
                                    <TextInput style={styles.input} 
                                        value={horaSaida}
                                        onChangeText={hs => setHoraSaida(hs)}
                                    />
                                    <Text style={styles.nomeCampo}>Km Saída</Text>
                                    <TextInput style={styles.input} placeholder='CNH'
                                        value={kmSaida}
                                        onChangeText={ks => setKmSaida(ks)}
                                    />
                                    <Text style={styles.nomeCampo}>Destino</Text>
                                    <TextInput style={styles.input}
                                        value={destino}
                                        onChangeText={dt => setDestino(dt)}
                                    />
                                </View>
                                <View styles={styles.conjunto2}>
                                    <Text style={styles.nomeCampo}>Data Retorno</Text>
                                    <TextInput style={styles.input}
                                        value={dataRetorno}
                                        onChangeText={dr => setDataRetorno(dr)}
                                    />
                                    <Text style={styles.nomeCampo}>Hora Retorno</Text>
                                    <TextInput style={styles.input} placeholder='Telefone'
                                        value={horaRetorno}
                                        onChangeText={hr => setHoraRetorno(hr)}
                                    />
                                    <Text style={styles.nomeCampo}>Km Retorno</Text>
                                    <TextInput style={styles.input} 
                                        value={kmRetorno}
                                        onChangeText={kr => setKmRetorno(kr)}
                                    />

                                </View>
                        </View>
                                <TouchableOpacity style={styles.btnSubmit} onPress={() => attCorrida()}>
                                    <Text style={styles.txtSubmit}>Editar</Text>
                                </TouchableOpacity>
                    </View> 
    
                </View>
       </View>
    )
}