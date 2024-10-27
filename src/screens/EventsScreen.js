import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TournamentCard from '../components/TournamentCard';

export default function EventsScreen() {
  const tournaments = [
    { id: '1', title: 'Torneio de Dama 2024', date: '20 de Outubro', location: 'São Luís, MA', price: 'R$35,00' },
    // Outros torneios
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={tournaments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TournamentCard {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});