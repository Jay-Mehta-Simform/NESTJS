import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepositoryDB } from './messages.repositoryDB';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepositoryDB],
})
export class MessagesModule {}
