import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';  // Importa o hook de navegação



const { width } = Dimensions.get('window'); // Obtém a largura da tela

export default function TournamentCard({ imageCard, title, location, date, price }) {

  const navigation = useNavigation(); // Inicializa o hook de navegação

  return (
    
    <View style={styles.card}>
      <View style={styles.imageCardContainer}>
        {/* Verifica se a imagem está disponível, senão coloca uma imagem padrão */}
        <Image source={imageCard || require('../assets/default-image.png')} style={styles.imageCard} />
      </View>
      
      {/* Adiciona valor padrão para título */}
      <Text style={styles.title}>{title || "Torneio Sem Título"}</Text>

      <View style={styles.iconTextContainer}>
        <Icon name="location-on" size={20} color="#666" />
        {/* Adiciona valor padrão para localização */}
        <Text style={styles.details}>{location || "Localização desconhecida"}</Text>
      </View>

      <View style={styles.iconTextContainer}>
        <Icon name="date-range" size={20} color="#666" />
        {/* Adiciona valor padrão para data */}
        <Text style={styles.details}>{date || "Data não informada"}</Text>
      </View>

      <View style={styles.contentCard}>
        {/* Adiciona valor padrão para preço */}
        <Text style={styles.price}>{price || "Preço não informado"}</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('TournamentDetailsScreen', {
            title,
            location,
            date,
            price,
            imageCard
          })}
        >
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
    fontWeight: 'bold',
  },
});
