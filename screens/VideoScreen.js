import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function VideoScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Aqui voc� pode ver seus v�deos!</Text>
            <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default VideoScreen;