import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('ratemymeal.db');

export const initializeDB = () => {
  try {
   
    db.execSync('PRAGMA journal_mode = WAL;');
    
    
    db.execSync(`
      CREATE TABLE IF NOT EXISTS meals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        note INTEGER NOT NULL,
        image TEXT
      );
    `);
    console.log('Base de données initialisée !');
  } catch (error) {
    console.error('Erreur initialisation DB:', error);
  }
};