import React from 'react';
import { Modal, View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function CustomModal({ visible, data, searchQuery, setSearchQuery, onSelect, onClose, placeholder }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder={placeholder}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#D3D3D3"
          />
          <Icon name="search" size={22} color="#9E9E9E" style={styles.searchIcon} />
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => onSelect(item.name)}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>Nenhum resultado encontrado</Text>}
        />
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    padding: 5,
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  item: {
    padding: 15,
  },
  itemText: {
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
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
});
