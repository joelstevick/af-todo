import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolvers } from './resolver';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { List } from './list.enty.extension';
import {ListResolvers} from "./resolver.list.extension";

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [List],
      },
    }),
  ],
  controllers: [],
  providers: [TodoService, TodoResolvers, ListResolvers],
})
export class AppModule {}
