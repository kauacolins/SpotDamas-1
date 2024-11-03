import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import imageContainerBackground from '../assets/Chess-amico 1.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.containerTextImage}>
        <Text style={styles.textBackground}>Bem vindo {'\n'}de volta</Text>
        <Image style={styles.imageContainer} source={imageContainerBackground}/>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Log In</Text>

        <Text style={styles.textInput}>Email</Text>
        <View style={styles.inputContent}>
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        </View>

        <Text style={styles.textInput}>Senha</Text>
        <View style={styles.inputContent}>
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry={!passwordVisible} value={password} onChangeText={setPassword}/>
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
              <Text style={styles.iconContainer}>
                <Icon name={passwordVisible ? 'visibility-off' : 'visibility'} size={24} color="#000" />
              </Text>
            </TouchableOpacity>
            
        </View>
        <Text style={styles.buttonForgotPass}>Esqueceu a senha?</Text>

        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Events')}>
          <Text style={styles.buttonTextLogin}>Login</Text>
        </TouchableOpacity>
        <Text>
          <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}>
            Não tem conta?
          </Text> {' '}
          <Text style={styles.linkTextRegister} onPress={() => navigation.navigate('Register')}>
            Registre-se
          </Text>
        </Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#FF6A00'
  },

  containerTextImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '28%',
    position: 'absolute'
  },

  textBackground: {
    color: '#fff',
    fontWeight: "700",
    fontSize: 30,
    padding: 25,
    flex: 1,
  },

  imageContainer: {
    width: '50%',
    height: '180%',
  },

  content: {
    backgroundColor: '#fff',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 'auto',
  },

  title: { 
    fontSize: 28,
    fontWeight: 'bold', 
    color: '#FF6A00',
    padding: 30,
    textAlign: 'center'
  },

  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },

  textInput: {
    fontWeight: '600',
    paddingBottom: 5,
  },

  input: { 
    flex: 1,
    padding: 10,
  },

  iconContainer: {
    padding: 10,
    color: '#'
  },

  buttonForgotPass: {
    marginTop: -20,
    color: '#9E9E9E',
    fontWeight: '600',
    textAlign: 'right',
    paddingTop: 5,
  },

  buttonLogin: { 
    backgroundColor: '#FF6A00',
    padding: 18, 
    borderRadius: 10,
    width: "100%",
    marginTop: "10%",
    marginBottom: "30%"
  },

  buttonTextLogin: {
      color: '#fff', 
      fontWeight: '700',
      textAlign: 'center',
  },

  linkText: {
    color: '#9E9E9E',
    marginTop: 10,
    textAlign: 'center'
  },
  linkTextRegister: {
    color: '#FF6A00'
  }
});