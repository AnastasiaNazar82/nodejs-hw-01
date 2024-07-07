import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileData);

    return contacts.length;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

console.log(await countContacts());
