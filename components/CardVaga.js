import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function CardVaga(props) {

    return (
        <>
            <View style={styles.container}>
                <Image source={props.imagem} style={styles.imagem} />
                <Text style={styles.tituloDaVaga}>{props.tituloDaVaga}</Text>
                <Text style={styles.nomeDaEmpresa}>{props.nomeDaEmpresa}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: '10%',
        width: '80%',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'flex-start',
        backgroundColor: 'black',
        overflow: 'visible', // Permite que a sombra seja desenhada fora do container
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24
    },
    imagem: {
        width: '100%',
        height: 200
    },
    tituloDaVaga: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 5,
        color: 'white'
    },
    nomeDaEmpresa: {
        fontSize: 18,
        marginHorizontal: 5,
        color: 'white'
    }
});

export default CardVaga;