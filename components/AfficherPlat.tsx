import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type AfficherPlatProp = {
  nom: string;
  note: number;
  image: string;
};

const AfficherPlat = ({ nom, note, image }: AfficherPlatProp) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nom}>{nom}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.note}>Note : {note}/10</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
    alignItems: 'center',
  },
  nom: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  note: {
    fontSize: 16,
  },
});

export default AfficherPlat;
