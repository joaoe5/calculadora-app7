import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default props => (
    <View style={styles.topo}>
        <Text style={styles.txtTitulo}>Calculadora 1.0</Text>
    </View>
);

const styles = StyleSheet.create({
    topo: {
        backgroundColor: '#2196f3',
        padding: 10,
        alignItems: 'center'
    },
    txtTitulo: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    }
});
