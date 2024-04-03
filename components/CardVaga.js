import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

function CardVaga(props) {

    return (
        <>
            <Pressable onPress={props.onPress}>
                <View style={styles.container}>
                    <Image style={styles.imagem} source={props.imagem} />
                    <Text style={styles.tituloDaVaga}>{props.tituloDaVaga}</Text>
                    <Text style={styles.nomeDaEmpresa}>{props.nomeDaEmpresa}</Text>
                </View>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: '10%',
        //width: '80%',
        borderStyle: 'solid',
        borderColor: 'black',
        //borderWidth: 5,
        borderRadius: 10,
        //alignItems: 'flex-start',
        backgroundColor: '#433F8C',
        overflow: 'hidden', // Permite que a sombra seja desenhada fora do container
        //shadowColor: "#000",
        //shadowOffset: {
        //    width: 0,
        //    height: 12,
        //},
        //shadowOpacity: 0.58,
        //shadowRadius: 16.00,
        elevation: 10
    },
    imagem: {
        width: '100%',
        height: 200,
        //borderTopLeftRadius: 10,
        //borderTopRightRadius: 10
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