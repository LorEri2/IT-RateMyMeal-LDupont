import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';


type AddMealFormProps = {
  onAddMeal: (name: string, rating: string) => void;
};

const AddMealForm = ({ onAddMeal }: AddMealFormProps) => {
  const [mealName, setMealName] = useState('');
  const [rating, setRating] = useState('');

  const handleAddMeal = () => {

    if (mealName.trim() === '' || rating.trim() === '') {
      return; 
    }
    onAddMeal(mealName, rating);

    setMealName('');
    setRating('');
  };

  return (
    <View style={styles.formContainer}>
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
      
      <Pressable style={styles.button} onPress={handleAddMeal}>
        <Text style={styles.buttonText}>Ajouter à la liste</Text>
      </Pressable>
    </View>
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
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddMealForm;