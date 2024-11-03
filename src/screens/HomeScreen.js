import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import imagemBackgroundHomeScreen from '../assets/Group 1.png';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={imagemBackgroundHomeScreen} style={styles.imageHomeScreen} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.logo}>SpotDama</Text>
        <Text style={styles.description}>
          Descubra torneios de dama perto de você e desafie sua estratégia!
        </Text>

        <View style={styles.buttonsLoginRegister}>
            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonTextLogin}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonTextRegister}>Registre-se</Text>
            </TouchableOpacity>
            
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },

  imageHomeScreen: {
    width: '100%',
    height: '50%', // Ajuste a altura conforme necessário
    resizeMode: 'cover', // Cobrir a área, mantendo a proporção
    top: 0,
    left: 0,
  },
  
  overlay: { /* overlay para escurecer a imagem */ },

  content: { 
    marginTop: '10%', // Deixe espaço suficiente para a imagem, ajuste conforme necessário
    marginHorizontal: '7%',
    zIndex: 1, // Certifica-se de que o conteúdo fique acima da imagem e da sobreposição
  },

  logo: { 
    fontSize: 28, 
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 10
  },

  description: { 
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    lineHeight: '27%',
  },

  buttonsLoginRegister: {
    alignItems: 'center',
  },

  buttonLogin: { 
    backgroundColor: '#FF6A00',
    padding: 18, 
    borderRadius: 10,
    width: "100%",
    marginTop: "10%",
  },

  buttonTextLogin: {
      color: '#fff', 
      fontWeight: '700',
      textAlign: 'center',
  },
      
  buttonRegister: { 
    borderColor: '#FF6A00',
    borderWidth: 1,
    padding: 18,
    borderRadius: 10,
    justifyContent: 'center',
    width: "100%",
    marginTop: "3%",
  },
  
  
  buttonTextRegister: {
      color: '#FF6A00',
      fontWeight: '700',
      textAlign: 'center',
    },
});