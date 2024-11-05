import React, { useState } from 'react'; // Certifique-se de importar useState do React
import { View, Text, FlatList, StyleSheet, TextInput, Modal, TouchableOpacity } from 'react-native';
import TournamentCard from '../components/TournamentCard';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importação do ícone
import { ScrollView } from 'react-native-gesture-handler';


export default function EventsScreen() {

  const [searchQuery, setSearchQuery] = useState('');
  const [state, setState] = useState(''); // Alterado para estado
  const [modalVisible, setModalVisible] = useState(false);
  const [region, setRegion] = useState('');
  const [selectedDate, setSelectedDate] = useState('');


  const events = [
    { id: '1', title: 'Torneio de Dama 2024', date: '2024-10-20' },
    { id: '2', title: 'Campeonato de Futebol', date: '2024-11-05' },
    { id: '3', title: 'Festival de Música', date: '2024-12-15' },
  ];


  const tournaments = [
    { id: '1', title: 'Torneio de Dama 2024', date: '20 de Outubro', location: 'São Luís, MA', price: 'R$35,00' },
    { id: '2', title: 'Torneio de Dama 2024', date: '20 de Outubro', location: 'São Luís, MA', price: 'R$35,00' },
    { id: '3', title: 'Torneio de Dama 2024', date: '20 de Outubro', location: 'São Luís, MA', price: 'R$35,00' },
    // Outros torneios
  ];

  const PRIMARY_COLOR = '#FF6A00';
  const GRAY_COLOR = '#9E9E9E';

  const states = [
    { id: '1', name: 'São Paulo' },
    { id: '2', name: 'Rio de Janeiro' },
    { id: '3', name: 'Minas Gerais' },
    { id: '4', name: 'Paraná' },
    { id: '5', name: 'Bahia' },
    { id: '6', name: 'Ceará' },
    // Adicione mais estados conforme necessário
  ];

const cities = [
  { id: '1', name: 'São Paulo' },
  { id: '2', name: 'Rio de Janeiro' },
  { id: '3', name: 'Belo Horizonte' },
  { id: '4', name: 'Curitiba' },
  { id: '5', name: 'Salvador' },
  { id: '6', name: 'Fortaleza' },
  // Adicione mais cidades conforme necessário
];
  

  const filteredStates = states.filter(state => 
    state.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length >= 3
  );

  const selectState = (selectedState) => {
    setState(selectedState);
    setModalVisible(false);
    setSearchQuery(''); // Limpa a busca ao selecionar um estado
  };
  // Alterado para estado
  // Define o estado searchQuery
  
  const selectCity = (city) => {
    setRegion(city);
    setModalVisible(false);
    setSearchQuery(''); // Limpa a busca ao selecionar uma cidade
  };

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length >= 3
  );
  
  const filteredEvents = events.filter(event => 
    selectedDate ? event.date === selectedDate : true
  );


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: '#ccc', fontWeight: '600'}}>Localização</Text>
        <Text style={{fontSize: '20',fontWeight: '700'}}>São Luis, Maranhão</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquise uma cidade"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#D3D3D3"
          />
          <Icon name="search" size={22} color="#9E9E9E" style={styles.searchIcon} />
        </View>
      </View>
      <View style={styles.containerCards}>
      <Text style={styles.title}>Torneios Próximos</Text>
        <FlatList
          data={tournaments}
          horizontal={true} // Faz a lista rolar na horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TournamentCard {...item} />}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center" // Ajusta a rolagem para centralizar os itens
          snapToInterval={300} // Defina um valor que corresponda à largura do seu card (ajuste conforme necessário)
          decelerationRate="fast" // Para uma rolagem mais suave
        />
      </View>
      <View>
        <Text style={styles.title}>Filtre por Região</Text>

        <Text style={styles.inputLabel}>Estado</Text>
        <TouchableOpacity style={styles.inputContainer} onPress={() => setModalVisible(true)}>
          <Text style={[styles.selectedCity, { color: state ? '#000' : '#D3D3D3' }]}>
          {state || 'Selecione um  estado'}
          </Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquise um estado"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholderTextColor="#D3D3D3"
                  />
                  <Icon name="search" size={22} color="#9E9E9E" style={styles.searchIcon} />
                </View>
                <FlatList
                  data={filteredStates}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.stateItem} onPress={() => selectState(item.name)}>
                      <Text style={styles.stateText}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                  ListEmptyComponent={<Text style={styles.emptyText}>Nenhum estado encontrado</Text>}
                />
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <Text style={styles.inputLabel}>Cidade</Text>
            <TouchableOpacity style={styles.inputContainer} onPress={() => setModalVisible(true)}>
              <Text style={[styles.selectedCity, { color: region ? '#000' : '#D3D3D3' }]}>
              {region || 'Selecione uma cidade'}
            </Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide">
              <View style={styles.modalContainer}>
                <View style={styles.searchContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquise uma cidade"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholderTextColor="#D3D3D3"
                  />
                  <Icon name="search" size={22} color="#9E9E9E" style={styles.searchIcon} />
                </View>
                <FlatList
                  data={filteredCities}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cityItem} onPress={() => selectCity(item.name)}>
                      <Text style={styles.cityText}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                  ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma cidade encontrada</Text>}
                />
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  containerCards: {
    paddingTop: '10%',
  },

  header: {
    height: '20%',
    paddingTop: '15%',
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 50, // Defina uma altura fixa
    padding: 5,
    marginVertical: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    borderWidth: 1,
    color: '#000',
    borderColor: '#ccc',
    borderRadius: 10,
    height: 50, // Defina uma altura fixa
    paddingHorizontal: 15,
  },
  inputLabel: {
    fontWeight: '600',
    paddingVertical: 5,
    color: '#000',
  },
  stateItem: {
    padding: 15,
  },
  stateText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    margin: 20,
    color: '#9E9E9E',
  },
  closeButton: {
    backgroundColor: '#FF6A00',
    padding: 18,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },

});