import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CardVaga from './components/CardVaga.js';

export default function Feed() {

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.container2}>
          <CardVaga imagem={require('./assets/cloudgenius.png')} tituloDaVaga='Desenvolvedor full-stack' nomeDaEmpresa='- Guedes' />
          <CardVaga imagem={require('./assets/databrain.png')} tituloDaVaga='Desenvolvedor full-stack' nomeDaEmpresa='- Guedes' />
          <CardVaga imagem={require('./assets/datainsight.png')} tituloDaVaga='Desenvolvedor full-stack' nomeDaEmpresa='- Guedes' />
          <CardVaga imagem={require('./assets/digitalmarketing.png')} tituloDaVaga='Desenvolvedor full-stack' nomeDaEmpresa='- Guedes' />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    backgroundColor: '#433F8C',
  },
  container2: {
    alignItems: 'center',
    paddingBottom: '10%'
  }
});