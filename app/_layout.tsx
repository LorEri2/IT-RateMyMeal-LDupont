import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
   
      <Stack.Screen 
        name="index" 
        options={{ title: 'Rate My Meal' }} 
      />
      
  
      <Stack.Screen 
        name="add" 
        options={{ title: 'Ajouter un plat', presentation: 'modal' }} 
      />

    
      <Stack.Screen 
        name="detail/[id]" 
        options={{ title: 'Détails du repas' }} 
      />
    </Stack>
  );
}