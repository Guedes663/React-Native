import React from 'react';
import { View, Text, Image } from 'react-native';

function CardVaga(props) {
    return (
        <View>
            <Text>{props.tituloDaVaga}</Text>
            <Text>{props.nomeDaEmpresa}</Text>
        </View>
    );
}

export default CardVaga;