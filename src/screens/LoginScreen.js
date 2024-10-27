import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Events')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.linkText}>Esqueceu a senha?</Text>
      <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}>
        Não tem conta? Registro-se
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { /* estilos do container */ },
  title: { fontSize: 24, fontWeight: 'bold' },
  input: { /* estilos de input */ },
  button: { backgroundColor: '#FF6A00', padding: 12, borderRadius: 5 },
  buttonText: { color: '#FFF' },
  linkText: { color: '#FF6A00', marginTop: 10 },
});