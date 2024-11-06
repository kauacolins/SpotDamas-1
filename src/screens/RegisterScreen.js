import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
  FlatList,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PRIMARY_COLOR = '#FF6A00';
const GRAY_COLOR = '#9E9E9E';

export default function RegisterScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [region, setRegion] = useState(null); // Alterado para armazenar a cidade e estado
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cities, setCities] = useState([]); // Lista de cidades filtradas

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  // Função para buscar cidades
  const handleCitySearch = async (query) => {
    setSearchQuery(query);
    if (query.length < 3) return; // Não faz a requisição se a busca for menor que 3 caracteres
    try {
      const response = await fetch(`https://sua-api.com/location?search=${query}`);
      const data = await response.json();
      setCities(data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar as cidades. Tente novamente.');
    }
  };

  // Função para selecionar uma cidade
  const selectCity = (city) => {
    setRegion(city); // Armazenando a cidade e estado selecionados
    setModalVisible(false);
    setSearchQuery(''); // Limpa a busca
  };

  // Função para registrar o usuário
  const handleRegister = async () => {
    if (!name || !email || !password || !region) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const { cidade_id, estado_id } = region; // Obtendo cidade_id e estado_id selecionados

    try {
      const response = await fetch('https://sua-api.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: name,
          email: email,
          senha: password,
          estado_id: estado_id,
          cidade_id: cidade_id,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        await AsyncStorage.setItem('user', JSON.stringify(data));
        navigation.navigate('Events');
      } else {
        Alert.alert('Erro', 'Falha ao registrar. Tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro. Tente novamente mais tarde.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.containerTextImage}>
            <Text style={styles.textBackground}>Faça seu {'\n'}registro</Text>
            <Image style={styles.imageContainer} source={require('../assets/Chess-amico 1.png')} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Registre-se</Text>

            <Text style={styles.inputLabel}>Nome</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
              />
            </View>

            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <Text style={styles.inputLabel}>Senha</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconButton}>
                <Icon name={passwordVisible ? 'visibility-off' : 'visibility'} size={22} color="#9E9E9E" />
              </TouchableOpacity>
            </View>

            <Text style={styles.inputLabel}>Região</Text>
            <TouchableOpacity style={styles.inputContainer} onPress={() => setModalVisible(true)}>
              <Text style={[styles.selectedCity, { color: region ? '#000' : '#D3D3D3' }]}>
                {region ? `${region.nome_cidade} - ${region.sigla_estado}` : 'Selecione uma cidade'}
              </Text>
              <Icon name="search" size={22} color="#9E9E9E" style={styles.searchIcon} />
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="slide">
              <View style={styles.modalContainer}>
                <View style={styles.searchContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquise uma cidade"
                    value={searchQuery}
                    onChangeText={handleCitySearch}
                    placeholderTextColor="#D3D3D3"
                  />
                  <Icon name="search" size={22} color="#9E9E9E" style={styles.searchIcon} />
                </View>
                <FlatList
                  data={cities}
                  keyExtractor={item => item.cidade_id.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cityItem} onPress={() => selectCity(item)}>
                      <Text style={styles.cityText}>{item.nome_cidade} - {item.sigla_estado}</Text>
                    </TouchableOpacity>
                  )}
                  ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma cidade encontrada</Text>}
                />
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </Modal>

            <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
              <Text style={styles.buttonTextRegister}>Registre-se</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Já tem conta?{' '}
              <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>Faça login</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  containerTextImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20%',
    marginTop: Platform.OS === 'web' ? '10%' : '20%', // Menor margem no web
    maxHeight: 200,

  },
  textBackground: {
    color: '#fff',
    fontWeight: "700",
    fontSize: 30,
    paddingLeft: 30,
    flex: 1,
  },
  imageContainer: {
    width: '56%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginTop: Platform.OS === 'web' ? '5%' : 'auto', // Menor margem para web
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 'auto',
  },
  title: { 
    paddingVertical: 30,
    fontSize: 28,
    fontWeight: 'bold', 
    color: PRIMARY_COLOR,
    textAlign: 'center',
  },
  inputLabel: {
    fontWeight: '600',
    paddingBottom: 5,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Ajustar para ter largura completa
    height: 50, // Defina uma altura fixa
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  input: { 
    flex: 1,
    padding: 10,
  },
  selectedCity: {
    flex: 1,
    padding: 10,
    color: '#C0C0C0',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 50, // Defina uma altura fixa
    marginBottom: 20,
    padding: 5,
    marginVertical: 30,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  cityItem: {
    padding: 15,
  },
  cityText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    margin: 20,
    color: GRAY_COLOR,
  },
  closeButton: {
    backgroundColor: PRIMARY_COLOR,
    padding: 18, 
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff', 
    fontWeight: '700',
    textAlign: 'center',
  },
  iconButton: {
    padding: 10,
  },
  buttonRegister: { 
    backgroundColor: PRIMARY_COLOR,
    padding: 18, 
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
  },
  buttonTextRegister: {
      color: '#fff', 
      fontWeight: '700',
      textAlign: 'center',
  },
  footerText: {
    color: GRAY_COLOR,
    marginTop: 20,
    textAlign: 'center',
  },
  linkText: {
    color: PRIMARY_COLOR,
  }
});
