import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window'); // Obtém a largura da tela

export default function TournamentCard({ imageCard, title, location, date, price }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageCardContainer}>
        <Image source={imageCard} style={styles.imageCard} />
      </View>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.iconTextContainer}>
        <Icon name="location-on" size={20} color="#666" />
        <Text style={styles.details}>{location}</Text>
      </View>

      <View style={styles.iconTextContainer}>
        <Icon name="date-range" size={20} color="#666" />
        <Text style={styles.details}>{date}</Text>
      </View>

      <View style={styles.contentCard}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 14,
    width: width * 0.7, // 70% da largura da tela
    borderRadius: 14,
    marginBottom: 16,
    marginRight: 20,
  },
  imageCardContainer: {
    height: width * 0.35, // Altura em proporção à largura (35% da largura da tela)
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 5,
  },
  imageCard: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  contentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#FF6A00',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#FF6A00',
    padding: 8,
    borderRadius: 6,
    width: '50%', // 50% da largura do card
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
  },
});
