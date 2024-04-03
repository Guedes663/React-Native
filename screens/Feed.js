import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardVaga from '../components/CardVaga.js';
import { useNavigation } from '@react-navigation/native';
import { dados } from '../data/dados.js';

function Feed() {

  const navigation = useNavigation();

  const irParaTelaDetalheVaga = (dadosVaga) => {
    navigation.navigate('DetalhesDaVaga', { dadosVaga } );
  }; 

  return (
    <>
      <View style={styles.container}>
        <FlatList data={dados} keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <CardVaga
                onPress={() => irParaTelaDetalheVaga(item)}
                imagem={item.imagem}
                tituloDaVaga={item.tituloDaVaga}
                nomeDaEmpresa={item.nomeDaEmpresa}
              />
            );
          }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    //flex: 1,
    padding: 16
  },
});

export default Feed;