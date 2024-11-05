import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Data() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  
  const events = [
    { id: '1', title: 'Torneio de Dama 2024', date: '2024-10-20' },
    { id: '2', title: 'Campeonato de Futebol', date: '2024-11-05' },
    { id: '3', title: 'Festival de Música', date: '2024-12-15' },
  ];

  const filteredEvents = events.filter(event => 
    selectedDate ? event.date === selectedDate : true
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // Formata a data para YYYY-MM-DD
    const formattedDate = date.toISOString().split('T')[0];
    setSelectedDate(formattedDate);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Button title="Selecionar Data" onPress={showDatePicker} />
      <Text style={styles.selectedDateText}>
        {selectedDate ? `Data Selecionada: ${selectedDate}` : 'Nenhuma data selecionada'}
      </Text>
      
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title} - {item.date}</Text>
          </View>
        )}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  selectedDateText: {
    marginVertical: 20,
    fontSize: 16,
  },
});