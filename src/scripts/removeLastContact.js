import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileData);

    if (contacts.length > 0) {
      const removeContact = contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Last contact deleted:', removeContact);
    } else {
      console.log('No contacts found.');
    }
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
