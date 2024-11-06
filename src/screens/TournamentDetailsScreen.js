import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

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
    <ScrollView style={styles.container}>
      <View style={styles.imageCardContainer}>
        <Image source={tournamentImage} style={styles.imageCard} />
      </View>
      
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

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  imageCardContainer: {
    width: '100%',
    height: width * 0.5, // Altura ajustada para a imagem
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
  },
  imageCard: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
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
  button: {
    backgroundColor: '#FF6A00',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
