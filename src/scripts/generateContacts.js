import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...currentContacts, ...newContacts];
    await writeContacts(updatedContacts);
    return updatedContacts;
  } catch (error) {
    console.log('error: ', error.message);
  }
};

generateContacts(5);
