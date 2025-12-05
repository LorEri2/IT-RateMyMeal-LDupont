import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import AfficherPlat from '../components/AfficherPlat';
import AddMealForm from '../components/AddMealForm';


type Meal = {
  id: string;
  nom: string;
  note: number;
  image: string;
};

export default function Index() {
 
  const [meals, setMeals] = useState<Meal[]>([
    { 
      id: '1', 
      nom: 'Pizza Margherita', 
      note: 8, 
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: '2', 
      nom: 'Burger Maison', 
      note: 9, 
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop' 
    },
  ]);

  // 2. La fonction qui ajoute un plat
  const addMeal = (name: string, rating: string) => {
    const newMeal: Meal = {
      id: Math.random().toString(), 
      nom: name,
      note: parseInt(rating),
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'
    };

    setMeals((currentMeals) => [...currentMeals, newMeal]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Mes Repas Notés</Text>

    
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        
        ListHeaderComponent={
          <AddMealForm onAddMeal={addMeal} />
        }
        
        renderItem={({ item }) => (
          <AfficherPlat 
            nom={item.nom} 
            note={item.note} 
            image={item.image} 
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 50,
  },
});