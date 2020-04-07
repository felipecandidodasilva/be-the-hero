import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
// Sempre que tivermos uma listagem usar o FlatList do react-native ao invés de View
// TouchableOpacity torna qualquer elemento clicável e o deixa opaco depois de clicado
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles'; // nome aqui se chama styles por conta de conflito com o react-native

export default function Incidents() {
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [test, setTest] = useState([]);
    
    async function loadIncidents() {
        const response = await api.get('incidents');
        setIncidents(response.data); 

    }
/**
 * useEffect vai disparar uma função quando alguma variavel dele mudar
 */
    
useEffect(() => {
    loadIncidents();
}, []); 

    function navigatetoDetail() {
        navigation.navigate('Detail');
    }; 

    return (
       <View style={ styles.container }>
           
           <View style={ styles.header }>
               <Image source={logoImg} />
               <Text style={ styles.headerText } >
                   Total de <Text style={ styles.headetTextBold} > 0 casos. </Text>
                </Text>
           </View>
           <Text style={styles.title}> Bem-vindo!</Text>
           <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>
       
            <FlatList 
            data={incidents}
            style={styles.incidentList}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ({ item: incident }) => (
                <View style={styles.incident}>
                    <Text  style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{incident.value}</Text>
                    
                    <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress={navigatetoDetail}
                    >
                        <Text style={styles.detailsButtonText}>
                            Ver mais detalhes
                        </Text>
                        <Feather name="arrow-right" size={16} color="#e02041" />
                    </TouchableOpacity>
                </View> 
            )}
            />
    </View> //container
    );
}