import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import CardVaga from './components/CardVaga.js';

export default function App() {

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('./assets/cloudgenius.png')} style={styles.imagem} />
          <Text>Titulo da Vaga</Text>

          <Image source={require('./assets/databrain.png')} style={styles.imagem2} />
          <Text>Nome da empresa</Text>

          <Text>Requisito</Text>
          <Text>TEXTO TEXTO TEXTO TEXTO</Text>
          <Text>Diferenciais</Text>
          <Text>TEXTO TEXTO TEXTO TEXTO</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    backgroundColor: '#433F8C',
    alignItems: 'center',
    height: 1000,
  },
  imagem: {
    width: '85%',
    height: 200,
  },
  imagem2: {
    width: '85%',
    height: 200,
  },
});