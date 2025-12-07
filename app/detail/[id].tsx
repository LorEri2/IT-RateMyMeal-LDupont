import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { db } from '../../store/database';

type Meal = {
  id: number;
  nom: string;
  note: number;
  image: string;
};

export default function MealDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [meal, setMeal] = useState<Meal | null>(null);

 
  useEffect(() => {
    const loadMeal = async () => {
      try {
      
        const result = await db.getFirstAsync<Meal>(
          'SELECT * FROM meals WHERE id = ?', 
          [Number(id)]
        );
        setMeal(result);
      } catch (error) {
        console.error("Erreur chargement détail:", error);
      }
    };
    loadMeal();
  }, [id]);

 
  const deleteMeal = async () => {
    try {
      await db.runAsync('DELETE FROM meals WHERE id = ?', [Number(id)]);
      router.back(); 
    } catch (error) {
      console.error("Erreur suppression:", error);
    }
  };

  if (!meal) {
    return (
      <View style={styles.container}>
        <Text>Chargement...</Text>
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


      <Pressable style={styles.deleteButton} onPress={deleteMeal}>
        <Text style={styles.deleteButtonText}>Supprimer ce plat</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 300, borderRadius: 15, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  ratingContainer: { 
    backgroundColor: '#007AFF', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginBottom: 40 
  },
  ratingText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  
  deleteButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center'
  },
  deleteButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});