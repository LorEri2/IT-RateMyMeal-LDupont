import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AddMealForm from '../components/AddMealForm';
import { addMealToData } from '../store/data';

export default function AddMealScreen() {
  const router = useRouter();

  const handleAddMeal = (name: string, rating: string) => {
    
    const newMeal = {
      id: Math.random().toString(),
      nom: name,
      note: parseInt(rating),
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'
    };

   
    addMealToData(newMeal);

    
    router.back();
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