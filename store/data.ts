
export const initialMeals = [
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
];


export let MEALS_DATA = [...initialMeals];

export const addMealToData = (newMeal: any) => {
  MEALS_DATA.push(newMeal);
};