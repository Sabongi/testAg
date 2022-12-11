import {React, useEffect} from 'react';
import {  View, Text, TouchableOpacity, Image  } from 'react-native';

import styles from './style'
import Visualizar from '../../assets/eye.png'
import Editar from '../../assets/edit.png'
import Apagar from '../../assets/delete.png'
import api from '../connection/api'
import { render } from 'react-dom';

export default function List({item, navigation, listaControle}) {
    const km = item.Km_Retorno
    const id = item.Controle_id

    console.log(item.Controle_id)


 function verInfo(){
    alert('Veículo: ' + item.Veiculo + '  Motorista: ' + item.Nome + '  Hora Saída: ' + item.Hora_saida + '  Km Saída: ' + item.Km_saida + 
    '  Destino: ' + item.Destino + '  Data_retorno: ' + item.Data_retorno + '  Hora Retorno: ' + item.Hora_retorno + '  Km Retorno: ' + 
    item.Km_Retorno + '  Km Percorrido: ' + km)
    if(km >= item.Km_Troca_Oleo){
        alert('Você precisa trocar o óleo')
    }

 }

    async function deletando(id){
        try {              
            const response = await api.delete('controle/' + id);
            const apagou = response.data.confirma;
            listaControle();
          } catch (err) {
              console.log('Erro: ' + err);
          }
    }

    function deletar(id){
    const confirma = 'deseja mesmo deletar esta corrida?'
    if(confirm(confirma) == true){
        deletando(id)
    } else{
        alert('Você não deletou a corrida')
    }
 }

 useEffect(() => {
    const atualiza = navigation.addListener('focus', ()=> {
        listaControle()})
  }, [navigation])


 return (
    <View>
    <View style={styles.lista}>

        <View style={styles.item}>
            <Text numberOfLines={2}>Data saída: {item.Data_saida}   Hora saida: {item.Hora_saida}   Veiculo: {item.Veiculo}</Text>
        </View>

        <View style={styles.botoes}>
                <TouchableOpacity onPress={() => verInfo()}>
                <View style={[styles.botao, {backgroundColor: 'green'}]}>
                <Image source={Visualizar} style={styles.icon} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Editar', {item})}>
                <View style={[styles.botao, {backgroundColor: 'yellow'}]}>
                <Image  source ={Editar} style={styles.icon} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deletar(id)}>            
                <View style={[styles.botao, {backgroundColor: 'red'}]}>
                <Image source={Apagar} style={styles.icon} />
                </View>
            </TouchableOpacity>
        </View> 
    </View>
    </View>
  );
}