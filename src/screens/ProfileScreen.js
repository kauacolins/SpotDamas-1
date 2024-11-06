import React from 'react'; 
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import FooterNavigation from '../components/FooterNavigation';

// Obtém a largura da tela
const screenWidth = Dimensions.get('window').width;

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Foto de Perfil */}
      <View style={styles.contain}>
        <View style={styles.profileContainer}>
            <Image
            source={{ uri: 'https://www.example.com/profile-pic.jpg' }} // Insira a URL ou o caminho da foto do perfil
            style={styles.profileImage}
            />
            <Text style={styles.userName}>Nome do Usuário</Text>
            <Text style={styles.location}>Localização</Text>
        </View>
      {/* Botões de Ação */}
        <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('EditProfile')}
            >
            <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.button, styles.logoutButton]}
            onPress={() => navigation.navigate('Login')}
            >
            <Text style={styles.buttonTextLogOut}>Sair</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <FooterNavigation />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',// Centraliza o conteúdo verticalmente
    padding: '10%', // Usando porcentagem para o padding
  },
  contain: {
    marginBottom: '30%',
  },

  profileContainer: {
    alignItems: 'center',
    marginTop: '30%', // Usando porcentagem para o margin
  },
  profileImage: {
    width: screenWidth * 0.4,  // Define a largura da imagem como 40% da tela
    aspectRatio: 1,            // Garante que a altura seja igual à largura (quadrado)
    borderRadius: 25,         // Arredonda as bordas da imagem
    marginBottom: 10,
    backgroundColor: "#000",  // Cor de fundo caso a imagem não carregue
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
  },
  location: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9C9C9C'
  },
  buttonContainer: {
    marginTop: '5%',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#FF6A00',
    padding: '4%', // Usando porcentagem para o padding
    borderRadius: 10,
    height: 50,
    width: '100%',
    marginTop: '3%', // Usando porcentagem para o margin
  },
  logoutButton: {
    borderWidth: 1,
    backgroundColor: undefined,
    borderColor: '#FF6A00',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonTextLogOut: {
    color: '#FF6A00',
    fontWeight: '600',
    textAlign: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
});
