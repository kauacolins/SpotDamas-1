import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://link-da-sua-imagem.com/imagem.jpg' }} // Substitua pelo link correto ou use require
        style={styles.image}
      />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.logo}>SpotDama</Text>
        <Text style={styles.description}>
          Descubra torneios de dama perto de você e desafie sua estratégia!
        </Text>
        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Registro-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { /* estilos de container */ },
  image: { /* estilos da imagem de fundo */ },
  overlay: { /* overlay para escurecer a imagem */ },
  content: { /* estilos do conteúdo centralizado */ },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#000' },
  description: { fontSize: 16, textAlign: 'center', color: '#000' },
  buttonLogin: { backgroundColor: '#FF6A00', padding: 12, borderRadius: 5 },
  buttonRegister: { borderColor: '#FF6A00', borderWidth: 1, padding: 12, borderRadius: 5 },
  buttonText: { color: '#FF6A00', fontWeight: '600' },
});