import {React, useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';

import List from '../list/index';
import styles from './style'
import api from '../connection/api'


export default function Main({navigation, route}) {

    const [estado, setEstado] = useState(false)

    const [corridas, setCorridas] = useState([]);
    const [data, setData]         = useState('');
    const [page, setPage]         = useState(1);
    const limit                   = 10;
    const [loading, setLoading] = useState(false);


    function filtraData(v){
        setData(v),
        listaControle(v)

    }

    async function listaControle(data) {
        try {
    
          if (loading) {
            return
          }
    
          setLoading(true)
    
          let dadosBusca = {
            DataSaida: data,
          };
    
          const response = await api.post('controle', dadosBusca, {
            params: { page, limit }
            
          });
          
          setCorridas(response.data.message[0]);
          
          setLoading(false)



    
        } catch (e) {
          setCorridas([]);
          console.log('erro' + e)
        }
      }

      useEffect(() => {
        const atualiza = navigation.addListener('focus', ()=> {
        listaControle(data)})
      }, [navigation])



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

        <TextInput style={styles.busca} placeholder={'Buscar Data'} value={data} onChangeText={dt => filtraData(dt)} />

        <View style={styles.box}>
        <FlatList
            data={corridas}
            renderItem={({ item }) => <List item={item} navigation={navigation} listaControle={listaControle} />}
            keyExtractor={item => item.Controle_id} 
            style={styles.flat}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            disableScrollViewPanResponder={true}
          />
        </View>  
    </View>
  );
}