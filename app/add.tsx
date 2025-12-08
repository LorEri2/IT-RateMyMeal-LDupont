import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AddMealForm from '../components/AddMealForm';
import { db } from '../store/database';

export default function AddMealScreen() {
  const router = useRouter();

  
  const handleAddMeal = async (name: string, rating: string, imageUri: string) => {
    try {
     
      await db.runAsync(
        'INSERT INTO meals (nom, note, image) VALUES (?, ?, ?)', 
        [name, parseInt(rating), imageUri]
      );
      
      router.back();
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <View style={styles.container}>
      <AddMealForm onAddMeal={handleAddMeal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
});