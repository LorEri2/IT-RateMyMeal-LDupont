import React, { useState, useCallback } from 'react'; 
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import { Link, useRouter, useFocusEffect } from 'expo-router';
import AfficherPlat from '../components/AfficherPlat';
import { db } from '../store/database'; 


type Meal = {
  id: number; 
  nom: string;
  note: number;
  image: string;
};

export default function Index() {
  const router = useRouter();
  const [meals, setMeals] = useState<Meal[]>([]);

  
  useFocusEffect(
    useCallback(() => {
     
      const loadData = async () => {
        try {
          // SELECT : On récupère tout
          const result = await db.getAllAsync<Meal>('SELECT * FROM meals');
          setMeals(result);
        } catch (error) {
          console.error("Erreur de chargement:", error);
        }
      };

      loadData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.addButton} 
        onPress={() => router.push('/add')}
      >
        <Text style={styles.addButtonText}>+ Nouveau Plat</Text>
      </Pressable>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <Link href={`/detail/${item.id}` as any} asChild>
            <Pressable>
              <AfficherPlat 
                nom={item.nom} 
                note={item.note} 
                image={item.image} 
              />
            </Pressable>
          </Link>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  listContent: { padding: 20, paddingBottom: 50 },
  addButton: {
    backgroundColor: '#f4511e',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});