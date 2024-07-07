import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf-8');
    const existingContacts = JSON.parse(fileData);
    return existingContacts;
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());
