import { readFile, writeFile } from 'fs/promises';

import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    return JSON.parse(contents);
  }
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 100);
    messages[id] = {
      id,
      content,
    };
    await writeFile('messages.json', JSON.stringify(messages));
    return 'Done!';
  }
}
