import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolvers } from './resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [TodoService, TodoResolvers],
})
export class AppModule {}
