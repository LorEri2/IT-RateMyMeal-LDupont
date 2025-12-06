import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { MEALS_DATA } from '../../store/data'; 

export default function MealDetailScreen() {

  const { id } = useLocalSearchParams();

 
  const meal = MEALS_DATA.find((m) => m.id === id);

  if (!meal) {
    return (
      <View style={styles.container}>
        <Text>Plat introuvable !</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.image }} style={styles.image} />
      <Text style={styles.title}>{meal.nom}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{meal.note} / 10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 300, borderRadius: 15, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  ratingContainer: { 
    backgroundColor: '#007AFF', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 
  },
  ratingText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
});