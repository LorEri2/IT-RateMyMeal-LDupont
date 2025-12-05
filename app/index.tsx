import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import AfficherPlat from '../components/AfficherPlat';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.headerTitle}>Mes Repas Notés</Text>

      {/* Plat 1 : Pizza */}
      <AfficherPlat 
        nom="Pizza Margherita" 
        note={8} 
        image="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop" 
      />

      {/* Plat 2 : Burger */}
      <AfficherPlat 
        nom="Burger Maison" 
        note={9} 
        image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" 
      />

      {/* Plat 3 : Pâtes */}
      <AfficherPlat 
        nom="Pâtes Carbonara" 
        note={6} 
        image="https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop" 
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50, // Un peu d'espace en haut
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center', // Centre tout horizontalement
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30, // Espace entre le titre et le premier plat
    color: '#333',
  },
});