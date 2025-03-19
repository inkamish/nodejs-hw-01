import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  const contacts = await readContacts();
  const newContacts = Array.isArray(updatedContacts)
    ? [...contacts, ...updatedContacts]
    : [...contacts, updatedContacts];

  await fs.writeFile(PATH_DB, JSON.stringify(newContacts, null, 2), 'utf-8');

  return updatedContacts;
};
