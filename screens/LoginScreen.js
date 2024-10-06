import React from 'react';
import { Pressable, View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import app from '../firebase/firebaseConfig';
import logo from '../imagens/logo_ufrrj.png';

const { width, height } = Dimensions.get('window');

function LoginScreen() {
    const navigation = useNavigation();
    const provider = new GoogleAuthProvider();

    function runGoogleAuth() {
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                navigation.navigate('Home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error);
            });
    }

    return (
        <View style={styles.mainLoginFormView}>
            <View style={styles.loginView}>
                <Image source={logo} style={styles.logoImage} resizeMode='contain' />
                <Pressable style={styles.googleLoginButton} onPress={runGoogleAuth}>
                    <Text style={styles.googleLoginButtonText}>Login com Google</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainLoginFormView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa', // Cor de fundo suave
    },
    loginView: {
        paddingTop: 70,
        textAlign: 'center',
        justifyContent: 'center',
        height: height * 0.5, // Mantendo a altura
        width: '15%', // Reduzindo a largura para metade
        backgroundColor: '#f3f2e6', // Tom claro da cor de fundo
        alignItems: 'center',
        borderColor: '#c0392b',
        borderWidth: 4,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    logoImage: {
        height: height * 0.2, // Mantendo o tamanho original da logo
        width: '100%', // A largura da logo ocupa 100% do contêiner
        borderRadius: 150,
        marginBottom: 20,
    },
    googleLoginButton: {
        backgroundColor: '#c0392b', // Tom de vermelho
        padding: 15,
        borderRadius: 5,
        width: '100%', // A largura do botão ocupa 100% do contêiner
        alignItems: 'center',
        marginTop: 30, // Espaço aumentado
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    googleLoginButtonText: {
        color: '#FFF',
        fontSize: 18, // Aumentar a fonte
        fontWeight: 'bold',
    },
});

export default LoginScreen;
