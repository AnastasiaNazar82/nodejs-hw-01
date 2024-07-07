import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(fileData);

    const newContact = createFakeContact();
    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('new contact added:', newContact);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
