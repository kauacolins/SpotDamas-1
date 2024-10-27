import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TextInput style={styles.input} placeholder="Região" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Registro-se</Text>
      </TouchableOpacity>
      <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
        Já tem conta? Entre
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