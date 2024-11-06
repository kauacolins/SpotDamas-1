// components/LocationFilter.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LocationFilter = ({ label, value, onPress }) => {
  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TouchableOpacity style={styles.inputContainer} onPress={onPress}>
        <Text style={[styles.selectedCity, { color: value ? '#000' : '#D3D3D3' }]}>
          {value || `Selecione um ${label.toLowerCase()}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    fontWeight: '600',
    paddingVertical: 5,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    color: '#000',
    borderColor: '#ccc',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
  },
  selectedCity: {
    fontSize: 14,
  },
});

export default LocationFilter;
