//import { MessagesRepository } from './messages.repository';
export abstract class Repository {
  abstract findOne(id: string): string;
  abstract findAll(): string[];
  abstract create(content: string): string;
}
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(private messagesRepo: Repository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
