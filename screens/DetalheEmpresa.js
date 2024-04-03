import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

function DetalheEmpresa() {

    const route = useRoute();
    const { dadosVaga } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image source={dadosVaga.imagem} style={styles.imagem} />
                <Text style={styles.titulo}>{dadosVaga.nomeDaEmpresa}</Text>
            </View>
            <Text style={styles.titulo}>Quem somos</Text>
            <Text style={styles.texto}>{dadosVaga.quemSomos}</Text>
        </View>
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
        width: '35%',
        height: 100,
        marginRight: '5%',
        borderRadius: 3,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        //color: 'white'
    },
    texto: {
        //color: 'white',
        fontSize: 18
    }
});

export default DetalheEmpresa;