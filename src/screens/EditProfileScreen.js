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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PRIMARY_COLOR = '#FF6A00';
const GRAY_COLOR = '#9E9E9E';

const cities = [
  { id: '1', name: 'São Paulo' },
  { id: '2', name: 'Rio de Janeiro' },
  { id: '3', name: 'Belo Horizonte' },
  { id: '4', name: 'Curitiba' },
  { id: '5', name: 'Salvador' },
  { id: '6', name: 'Fortaleza' },
];

export default function EditProfileScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [profileImage, setProfileImage] = useState(
    'https://www.example.com/profile-pic.jpg' // Exemplo de imagem de perfil
  );

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const selectCity = (city) => {
    setRegion(city);
    setModalVisible(false);
    setSearchQuery('');
  };

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length >= 3
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.containerTextImage}>
            <Text style={styles.textBackground}>Editar Perfil</Text>
            <Image style={styles.imageContainer} source={{ uri: profileImage }} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Altere suas informações</Text>

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
                {region || 'Selecione uma cidade'}
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

            <TouchableOpacity style={styles.buttonSave} onPress={() => { /* Função para salvar as alterações */ }}>
              <Text style={styles.buttonTextSave}>Salvar Alterações</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Voltar ao{' '}
              <Text style={styles.linkText} onPress={() => navigation.goBack()}>perfil</Text>
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
  },
  textBackground: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 30,
    paddingLeft: 30,
    flex: 1,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 15,
    resizeMode: 'cover',
  },
  editImageButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#00000080',
    borderRadius: 20,
    padding: 5,
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
    width: '100%',
    height: 50,
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
    height: 50,
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
    width: '100%',
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
  buttonSave: {
    backgroundColor: PRIMARY_COLOR,
    padding: 18,
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
  },
  buttonTextSave: {
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
  },
});
