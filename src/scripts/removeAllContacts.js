import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('all contacts deleted');
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
