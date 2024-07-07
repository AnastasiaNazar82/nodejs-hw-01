import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    let existingContacts = [];
    try {
      const fileData = await fs.readFile(PATH_DB, 'utf-8');
      existingContacts = JSON.parse(fileData);
    } catch (error) {
      console.error(error);
    }

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...existingContacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log(`${number} new contacts added.`);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
