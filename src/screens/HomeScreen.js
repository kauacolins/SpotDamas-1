import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import imagemBackgroundHomeScreen from '../assets/Group 1.png';

// Constantes para cores e dimensões
const { width } = Dimensions.get('window');
const PRIMARY_COLOR = '#FF6A00';
const BLACK_COLOR = '#000';
const WHITE_COLOR = '#fff';

export default function HomeScreen({ navigation }) {
  const handleLoginPress = () => navigation.navigate('Login');
  const handleRegisterPress = () => navigation.navigate('Register');

  return (
    <View style={styles.container}>
      {/* Imagem de fundo e sobreposição */}
      <Image source={imagemBackgroundHomeScreen} style={styles.imageHomeScreen} />
      <View style={styles.overlay} />

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.logo}>SpotDama</Text>
        <Text style={styles.description}>
          Descubra torneios de dama perto de você e desafie sua estratégia!
        </Text>

        {/* Botões de Login e Registro */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonLogin} onPress={handleLoginPress}>
            <Text style={styles.buttonTextLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister} onPress={handleRegisterPress}>
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
    backgroundColor: WHITE_COLOR,
  },

  imageHomeScreen: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },

  content: { 
    flex: 1,
    marginTop: '10%',
    marginHorizontal: '7%',
    zIndex: 1,
  },

  logo: { 
    fontSize: 28, 
    fontWeight: 'bold',
    color: BLACK_COLOR,
    paddingVertical: 10,
  },

  description: { 
    fontSize: 20,
    color: BLACK_COLOR,
    fontWeight: '600',
    lineHeight: 27,
    marginBottom: 20,
  },

  buttonsContainer: {
    alignItems: 'center',
  },

  buttonLogin: { 
    backgroundColor: PRIMARY_COLOR,
    padding: 18, 
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
  },

  buttonTextLogin: {
    color: WHITE_COLOR, 
    fontWeight: '700',
    textAlign: 'center',
  },
      
  buttonRegister: { 
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    padding: 18,
    borderRadius: 10,
    width: "100%",
    marginTop: 10,
  },
  
  buttonTextRegister: {
    color: PRIMARY_COLOR,
    fontWeight: '700',
    textAlign: 'center',
  },
});
