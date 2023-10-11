import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepositoryDB } from './messages.repositoryDB';
import { MessagesRepository } from './messages.repository';
import { Repository } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [
    MessagesService,
    { provide: Repository, useClass: MessagesRepositoryDB },
  ],
})
export class MessagesModule {}
