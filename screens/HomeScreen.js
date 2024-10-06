import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo à home!</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Fotos')}>
                    <Text style={styles.buttonText}>VER FOTOS</Text>
                </Pressable>
                <View style={styles.spacer} />
                <Pressable style={styles.button} onPress={() => navigation.navigate('Videos')}>
                    <Text style={styles.buttonText}>VER VÍDEOS</Text>
                </Pressable>
                <View style={styles.spacer} />
                <Pressable style={styles.button} onPress={() => console.log('Tirar Foto')}>
                    <Text style={styles.buttonText}>USAR CAMERA</Text>
                </Pressable>
                <View style={styles.spacer} />
                <Pressable style={styles.button} onPress={() => console.log('Gravar Vídeo')}>
                    <Text style={styles.buttonText}>FAZER UPLOAD DE FOTOS/VIDEOS</Text>
                </Pressable>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    "UM SONHO SONHADO SOZINHO É UM SONHO.  
                    UM SONHO SONHADO JUNTO É REALIDADE."
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        height: 'auto',
    },
    spacer: {
        height: 15,
    },
    button: {
        backgroundColor: '#e74c3c', // Cor do botão
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: '#FFFFFF', // Texto branco
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    footerText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#333',
    },
});

export default HomeScreen;
