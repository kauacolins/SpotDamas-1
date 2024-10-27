import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TournamentCard({ title, date, location, price }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>{date} - {location}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 8, marginBottom: 16 },
  title: { fontSize: 18, fontWeight: 'bold' },
  details: { fontSize: 14, color: '#666' },
  price: { fontSize: 16, color: '#FF6A00', marginVertical: 8 },
  button: { backgroundColor: '#FF6A00', padding: 8, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#FFF' },
});