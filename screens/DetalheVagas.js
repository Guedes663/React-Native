import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

function DetalheVaga() {

  const navigation = useNavigation();
  const route = useRoute();
  const { dadosVaga } = route.params;

  const irParaTelaDetalheEmpresa = () => {
    navigation.navigate('DetalhesDaEmpresa', { dadosVaga });
  };
  
  return (
    <>
      <ScrollView style={styles.container}>
        <Image source={dadosVaga.imagem} style={styles.imagem} />
        <Text style={styles.titulo}>{dadosVaga.tituloDaVaga}</Text>
        <Pressable onPress={() => irParaTelaDetalheEmpresa()}>
          <View style={styles.container2}>
            <Image source={dadosVaga.logo} style={styles.imagem2} />
            <Text style={styles.titulo3}>{dadosVaga.nomeDaEmpresa}</Text>
          </View>
        </Pressable>
        <Text style={styles.titulo2}>Requisitos</Text>
        <Text style={styles.texto}>{dadosVaga.requisitos}</Text>
        <Text style={styles.titulo2}>Diferenciais</Text>
        <Text style={styles.texto}>{dadosVaga.diferenciais}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    height: 'windowHeight',
    padding: 16
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  imagem2: {
    width: '20%',
    height: 60,
    marginRight: '2%',
    borderRadius: 3,
    resizeMode: 'stretch'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '3%'
    //color: 'white'
  },
  titulo2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '3%'
    //color: 'white'
  },
  titulo3: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  texto: {
    //color: 'white',
    fontSize: 18
  }
});

export default DetalheVaga;