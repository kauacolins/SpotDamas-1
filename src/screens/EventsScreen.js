// EventsScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import TournamentCardExtended from '../components/TournamentCardExtended.js';
import TournamentCard from '../components/TournamentCard.js';
import FooterNavigation from '../components/FooterNavigation';
import CustomModal from '../components/CustomModal';
import LocationFilter from '../components/LocationFilter'; // Importa o novo componente

const screenHeight = Dimensions.get('window').height;

export default function EventsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [state, setState] = useState('');
  const [region, setRegion] = useState('');
  const [stateModalVisible, setStateModalVisible] = useState(false);
  const [cityModalVisible, setCityModalVisible] = useState(false);

  const tournaments = [
    { id: '1', title: 'Torneio de Dama 2024', date: '20 de Outubro', location: 'São Luís, MA', price: 'R$35,00' },
    { id: '2', title: 'Torneio de Dama 2024', date: '20 de Outubro', location: 'São Luís, MA', price: 'R$35,00' },
    { id: '3', title: 'Torneio de Dama 2024', date: '20 de Outubro', location: 'São Luís, MA', price: 'R$35,00' },
    // Outros torneios
  ];

  const states = [
    { id: '1', name: 'São Paulo' },
    { id: '2', name: 'Rio de Janeiro' },
    { id: '3', name: 'Minas Gerais' },
    // Adicione mais estados conforme necessário
  ];

  const cities = [
    { id: '1', name: 'São Paulo' },
    { id: '2', name: 'Rio de Janeiro' },
    { id: '3', name: 'Belo Horizonte' },
    // Adicione mais cidades conforme necessário
  ];

  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length >= 3
  );

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length >= 3
  );

  const selectState = (selectedState) => {
    setState(selectedState);
    setStateModalVisible(false);
    setSearchQuery('');
  };

  const selectCity = (selectedCity) => {
    setRegion(selectedCity);
    setCityModalVisible(false);
    setSearchQuery('');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: '#ccc', fontWeight: '600' }}>Localização</Text>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>São Luis, Maranhão</Text>
        </View>
        <View style={styles.containerCards}>
          <Text style={styles.title}>Torneios Próximos</Text>
          <FlatList
            data={tournaments}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TournamentCard {...item} />}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            snapToInterval={300}
            decelerationRate="fast"
          />
        </View>
        <View>
          <Text style={styles.title}>Filtre por Região</Text>
          <View style={styles.containerFilters}>
            <LocationFilter label="Estado" value={state} onPress={() => setStateModalVisible(true)} />
            <LocationFilter label="Cidade" value={region} onPress={() => setCityModalVisible(true)} />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Aplicar filtro</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={tournaments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TournamentCardExtended {...item} scrollEnabled={false} />}
          />
        </View>
        <CustomModal
          visible={stateModalVisible}
          data={filteredStates}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelect={selectState}
          onClose={() => setStateModalVisible(false)}
          placeholder="Pesquise um estado"
        />
        <CustomModal
          visible={cityModalVisible}
          data={filteredCities}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelect={selectCity}
          onClose={() => setCityModalVisible(false)}
          placeholder="Pesquise uma cidade"
        />
      </ScrollView>
      <View style={styles.footerContainer}>
        <FooterNavigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  containerCards: {
    paddingTop: '7%',
  },
  header: {
    height: screenHeight * 0.10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: screenHeight * 0.05,
    marginBottom: 20,
  },
  containerFilters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FF6A00',
    padding: 18,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
})