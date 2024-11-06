import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, ImageBackground, Platform   } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

export default function TournamentDetailsScreen({ route, navigation }) {
  // Verifique se os parâmetros existem antes de acessá-los
  const { title, location, date, price, imageCard } = route.params || {};

  // Se algum dos parâmetros estiver ausente, você pode fornecer valores padrão
  const tournamentTitle = title || "Torneio Sem Título";
  const tournamentLocation = location || "Localização desconhecida";
  const tournamentDate = date || "Data não informada";
  const tournamentPrice = price || "Preço não informado";
  const tournamentImage = imageCard || require('../assets/default-image.png');

  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.imageCardContainer}>
        <ImageBackground source={tournamentImage} style={styles.imageCard} />
      </View>

      <View style={styles.contain}>
        <Text style={styles.title}>{tournamentTitle}</Text>
        
        <View style={styles.iconTextContainer}>
          <Icon name="location-on" size={20} color="#666" />
          <Text style={styles.details}>{tournamentLocation}</Text>
        </View>

        <View style={styles.iconTextContainer}>
          <Icon name="date-range" size={20} color="#666" />
          <Text style={styles.details}>{tournamentDate}</Text>
        </View>

        <Text style={styles.price}>{tournamentPrice}</Text>

      </View>
    </ScrollView>
    
    <View style={styles.containerButton}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageCardContainer: {
    width: '100%',
    height: Platform.OS === 'web' ? width * 0.5 : width * 1.2, // Ajusta a altura dependendo da plataforma
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
  },

  imageCard: {
    flex: 1,
    justifyContent: 'center', // Centraliza o conteúdo na tela
    alignItems: 'center',
  },
  contain: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: '30%',
    marginTop: '-20%',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#666',
    marginLeft: 5,
  },
  price: {
    fontSize: 20,
    color: '#FF6A00',
    marginVertical: 20,
  },

  containerButton: {
    flex: 1,
    alignItems: 'center', // Centraliza o botão horizontalmente
    justifyContent: 'center', // Centraliza o botão verticalmente
    paddingBottom: '15%', // Ajusta a posição vertical
    paddingHorizontal: '8%',
  },

  button: {
    backgroundColor: '#FF6A00',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    padding: '7%'
  },
});
