import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import { Link, useRouter, useFocusEffect } from 'expo-router';
import AfficherPlat from '../components/AfficherPlat';
import { MEALS_DATA } from '../store/data';

export default function Index() {
  const router = useRouter();
  const [meals, setMeals] = useState(MEALS_DATA);


  useFocusEffect(
    React.useCallback(() => {
      setMeals([...MEALS_DATA]);
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
        keyExtractor={(item) => item.id}
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