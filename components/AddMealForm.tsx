import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable, Text, ScrollView } from 'react-native';
import ImageSelector from './ImageSelector'; 


type AddMealFormProps = {
  onAddMeal: (name: string, rating: string, imageUri: string) => void;
};

const AddMealForm = ({ onAddMeal }: AddMealFormProps) => {
  const [mealName, setMealName] = useState('');
  const [rating, setRating] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 

  const handleAddMeal = () => {
 
    if (mealName.trim() === '' || rating.trim() === '' || !selectedImage) {
      alert("Merci de remplir tous les champs et de prendre une photo !");
      return; 
    }

   
    onAddMeal(mealName, rating, selectedImage);

   
    setMealName('');
    setRating('');
    setSelectedImage(null);
  };

 
  const imageTakenHandler = (imageUri: string) => {
    setSelectedImage(imageUri);
  };

  return (
    <ScrollView style={styles.formContainer}>
      <Text style={styles.label}>Ajouter un nouveau plat</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nom du plat (ex: Sushi)"
        value={mealName}
        onChangeText={setMealName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Note (1-10)"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />
      
    <ImageSelector onImageTaken={imageTakenHandler} />

      <Pressable style={styles.button} onPress={handleAddMeal}>
        <Text style={styles.buttonText}>Sauvegarder le plat</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  input: {
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc',
    padding: 10, borderRadius: 5, marginBottom: 15, fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF', padding: 12, borderRadius: 5, alignItems: 'center', marginTop: 10
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default AddMealForm;