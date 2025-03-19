import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    return [];
  }
};
