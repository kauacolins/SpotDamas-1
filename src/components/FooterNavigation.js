// components/FooterNavigation.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const FooterNavigation = () => {
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Events')}>
        <Icon name="home" size={30} color="#ccc" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Icon name="person" size={30} color="#ccc" />
        <Text style={styles.label}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  button: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#ccc',

  },
});

export default FooterNavigation;
