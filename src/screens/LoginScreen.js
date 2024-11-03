import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PRIMARY_COLOR = '#FF6A00';
const GRAY_COLOR = '#9E9E9E';

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajusta para o tipo de plataforma
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.containerTextImage}>
            <Text style={styles.textBackground}>Bem vindo {'\n'}de volta</Text>
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

            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Events')}>
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
    marginTop: '20%',
  },
  textBackground: {
    color: '#fff',
    fontWeight: "700",
    fontSize: 30,
    paddingLeft:30,
    flex: 1,
  },
  imageContainer: {
    width: '56%', // ou maior, dependendo do quanto você quer aumentar
    height: undefined, // permite que o aspecto da imagem seja mantido
    aspectRatio: 1, // ajusta para manter a proporção da imagem
    resizeMode: 'contain',
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
