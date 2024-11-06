import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PRIMARY_COLOR = '#FF6A00';
const GRAY_COLOR = '#9E9E9E';

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  // Função para realizar o login
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha o email e a senha.');
      return;
    }

    try {
      const response = await fetch('https://sua-api.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          senha: password,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Armazena os dados do usuário no AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(data));

        // Navega para a tela de Eventos (ou outra tela)
        navigation.navigate('Events');
      } else if (response.status === 401) {
        Alert.alert('Erro', 'Email ou senha inválidos.');
      } else {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro de conexão. Tente novamente mais tarde.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajusta para o tipo de plataforma
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.containerTextImage}>
            <Text style={styles.textBackground}>Bem-vindo {'\n'}de volta</Text>
            <Image style={styles.imageContainer} source={require('../assets/Chess-amico 1.png')} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Log In</Text>

            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <Text style={styles.inputLabel}>Senha</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconButton}>
                <Icon name={passwordVisible ? 'visibility-off' : 'visibility'} size={22} color="#9E9E9E" />
              </TouchableOpacity>
            </View>

            <Text style={styles.buttonForgotPass}>Esqueceu a senha?</Text>

            <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
              <Text style={styles.buttonTextLogin}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Não tem conta?{' '}
              <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}>Registre-se</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: PRIMARY_COLOR
  },
  containerTextImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'web' ? '10%' : '20%', // Menor margem no web
  },
  textBackground: {
    color: '#fff',
    fontWeight: "700",
    fontSize: 30,
    paddingLeft:30,
    flex: 1,
  },
  imageContainer: {
    width: Platform.OS === 'web' ? '30%' : '56%', // Menor largura para web
    height: undefined, // permite que o aspecto da imagem seja mantido
    aspectRatio: 1, // ajusta para manter a proporção da imagem
    resizeMode: 'contain',
    maxHeight: 200, // Altura máxima para limitar em telas maiores
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 'auto',
  },
  title: { 
    paddingVertical: 30,
    fontSize: 28,
    fontWeight: 'bold', 
    color: PRIMARY_COLOR,
    textAlign: 'center',
  },
  inputLabel: {
    fontWeight: '600',
    paddingBottom: 5,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50, 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  input: { 
    flex: 1,
    padding: 10,
  },
  iconButton: {
    paddingHorizontal: 10,
  },
  buttonForgotPass: {
    color: GRAY_COLOR,
    fontWeight: '600',
    textAlign: 'right',
    marginTop: -10,
  },
  buttonLogin: { 
    backgroundColor: PRIMARY_COLOR,
    padding: 18, 
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
  },
  buttonTextLogin: {
      color: '#fff', 
      fontWeight: '700',
      textAlign: 'center',
  },
  footerText: {
    color: GRAY_COLOR,
    marginTop: 20,
    textAlign: 'center',
  },
  linkText: {
    color: PRIMARY_COLOR,
  }
});
